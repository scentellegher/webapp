define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/datapoint',
  'collections/datapointList',
  'models/goal',
  'gchart',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/datapoint/datapointTemplate.html'
], function($, _, Backbone, $, Datapoint, Datapoints, Goal, gchart, datapointTemplate ){

	var DataView = Backbone.View.extend({
		el : ".content",
		render : function (options) {
			var that = this;
			if(options.goalId){;
				that.mygoal = new Goal({id: options.goalId});
				console.log(that.mygoal);
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
							// if (day_number==that.datapoints.length){
							// 	my_array.push([day_number.toString() , datapoint.get('value'), that.mygoal.get('goalValue')]);	
							// } else {
							// 	my_array.push([day_number.toString() , datapoint.get('value'), null]);
							// }
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
				        
						var template = _.template(datapointTemplate, {datapoints: that.datapoints, goal: that.mygoal});
						that.$el.html(template);		

				        console.log("ELEMENTO?");
				        console.log(document.getElementById('gviz'));
						var chart = new gchart.LineChart(document.getElementById('gviz'));
        				chart.draw(data, options);

					}
				});
			}else{
				console.log("problema");
			}
		},
		events: {
			"click .mygoals.a" : "editData"
		},
		editData : function (ev) {
			console.log("SAJDAL");
			return false; //do not refresh the browser
		}
	});
	return DataView;
});