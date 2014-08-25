define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/goal',
  'collections/goalList',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/goal/goalTemplate.html'
], function($, _, Backbone, $, Goal, Goals, goalsTemplate){

	var GoalView = Backbone.View.extend({
		el : ".goals",
		render : function (){//options) {
			var that = this;
			// if(options.id){
			that.goals = new Goals({id: 1});//options.id});
			that.goals.fetch({
				success: function (goals) {
					console.log("entro view");
					console.log(goals);
					var template = _.template(goalsTemplate, {goals: goals});
					that.$el.html(template);		
				}
			});
			// } else {
			// 	console.log("OOOOPS");
			// }			
		}
	});
	return GoalView;
});