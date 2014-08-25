define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/datapoint',
  'collections/datapointList',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/datapoint/datapointTemplate.html'
], function($, _, Backbone, $, Datapoint, Datapoints, datapointTemplate){

	var DataView = Backbone.View.extend({
		el : ".container",
		render : function (options) {
			var that = this;
			if(options.goalId){
				console.log("entro IF")
				console.log(options.goalId);
				that.datapoints = new Datapoints({id: options.goalId});
				that.datapoints.fetch({
					success: function() {
						console.log("prova");
						var template = _.template(datapointTemplate, {datapoints: that.datapoints});
						that.$el.html(template);		
					}
				});
			}else{
				console.log("problema");
			}
			// var that = this;
			// if(options.id){
			// 	that.goals = new Goals({id: options.id});
			// 	that.goals.fetch({
			// 		success: function (goals) {
			// 			console.log("entro view");
			// 			console.log(goals);
			// 			var template = _.template(goalsTemplate, {goals: goals});
			// 			that.$el.html(template);		
			// 		}
			// 	});
			// } else {
			// 	console.log("OOOOPS");
			// }			
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