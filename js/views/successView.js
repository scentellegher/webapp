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
		render : function (){
			// console.log("create template");
			var template = _.template(successTemplate, {});
			// console.log("create template");
			// console.log(this.$el);
			// console.log("create template");
			this.$el.html(template);		
		}
	});
	return GoalView;
});