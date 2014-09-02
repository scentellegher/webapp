define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'collections/goalList',
  'text!templates/goal/goalTemplate.html'
], function($, _, Backbone, $, Goals, goalsTemplate){

	var GoalView = Backbone.View.extend({
		el : ".goals",
		render : function (){
			var that = this;
			that.goals = new Goals({id: 1});
			that.goals.fetch({
				success: function (goals) {
					var template = _.template(goalsTemplate, {goals: goals});
					that.$el.html(template);		
				}
			});			
		}
	});
	return GoalView;
});