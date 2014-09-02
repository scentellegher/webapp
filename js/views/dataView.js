define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/datapoint',
  'collections/datapointList',
  'models/goal',
  'gchart',
  'text!templates/datapoint/datapointTemplate.html'
], function($, _, Backbone, $, Datapoint, Datapoints, Goal, gchart, datapointTemplate ){

	var DataView = Backbone.View.extend({
		el : ".content",
		render : function (options) {
			var that = this;
			if(options.goalId){;
				that.mygoal = new Goal({id: options.goalId});
				that.mygoal.fetch({
					success: function (){
						console.log(that.mygoal);
					}
				});
				that.datapoints = new Datapoints({id: options.goalId});
				that.datapoints.fetch({
					success: function() {
						var selectType = function () {
							if (that.mygoal.get('goalType')==1) {
								return { t:"weight", m:"kg"};; 
							}else if (that.mygoal.get('goalType')==2) {
								return { t:"calories", m:"cal"}; 
							}else if (that.mygoal.get('goalType')==3) {
								return { t:"distance", m:"km"};
							}else if (that.mygoal.get('goalType')==4) {
								return { t:"sleep", m:"hours"};
							}else if (that.mygoal.get('goalType')==5) {
								return { t:"steps", m:"steps"};;
							}else if (that.mygoal.get('goalType')==6){
								return { t:"floors", m:"floors"};
							}else{
								return {};
							};
						}
						console.log("TIPO "+selectType().t);
						var my_array = [['Day','Measure', 'Goal']];
						var day_number = 1;	
						that.datapoints.each(function (datapoint) {
							my_array.push([day_number.toString() , datapoint.get('value'), that.mygoal.get('goalValue')]);	
							day_number++;
						});         

						var data = new gchart.arrayToDataTable(my_array);

				        var options = {
				        		"legend": "none",
				        		'chartArea': {'width': '80%', 'height': '80%'}, 
				        		'series': [{pointSize: 4}, {}],
				        		"vAxis":{"title": selectType().t+" ("+selectType().m+")"},
				        		"hAxis":{"title":"days"},
				        		"legend":"none"
				        };
				        
				        //calculate days left
				        var d = new Date();
						var currDate = d.getTime();
						var dateEnd = that.mygoal.get('goalDateEnd');
						var dateStart = that.mygoal.get('goalDateStart');
						var tot = dateEnd -dateStart;
						var perc = ((dateEnd - currDate)/tot)*100;
						var res = (dateEnd - currDate)/(1000*60*60*24);
						var daysLeft = Math.floor(res);

						var template = _.template(datapointTemplate, {datapoints: that.datapoints, goal: that.mygoal, daysLeft: daysLeft, perc: perc});
						that.$el.html(template);		

				        if(that.datapoints.length!=0){
							var chart = new gchart.LineChart(document.getElementById('gviz'));
        					chart.draw(data, options);
        				}

					}
				});
			}
		}
	});
	return DataView;
});