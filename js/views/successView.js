define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'collections/goalList',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/goal/editSuccessTemplate.html'
], function($, _, Backbone, $, Goals, successTemplate){

	var GoalView = Backbone.View.extend({
		el : "#succ",
		render : function (options){
			var template = _.template(successTemplate, {path: options.path});
			this.$el.html(template);		
		}
	});
	return GoalView;
});