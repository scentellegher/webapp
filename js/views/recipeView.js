define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'models/recipe',
  'text!templates/recipe/recipeTemplate.html'
], function($, _, Backbone, $, Recipe, recipeTemplate){

	var RecipeView = Backbone.View.extend({
		el : ".recipe",
		render : function () {
			var that = this; 
			this.recipe = new Recipe();
			this.recipe.fetch({
				success : function (recipe) {
					var template = _.template(recipeTemplate, {recipe: recipe});
					that.$el.html(template);		
				}
			});
			
		}
	});
	return RecipeView;
});