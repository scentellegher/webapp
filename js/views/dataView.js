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
			if(options.goalId){
				console.log("entro IF")
				console.log(options.goalId);

				console.log("ista mygoal");
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
						var my_array = [['Day','Measure']];
						var day_number = 1;	
						that.datapoints.each(function (datapoint) {
							my_array.push([day_number.toString() , datapoint.get('value')]);
							console.log([day_number.toString() , datapoint.get('value')]);
							day_number++;
						});         

						var data = new gchart.arrayToDataTable(my_array);

				        var options = {
				        		"legend": "none",
				        		'chartArea': {'width': '80%', 'height': '80%'}, 
				        		'pointSize': 4,
				        		"vAxis":{"title":"weight"},
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