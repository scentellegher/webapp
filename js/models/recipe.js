define(['underscore','backbone'], function(_, Backbone) {
  var Recipe = Backbone.Model.extend({
  		urlRoot: "http://localhost:8084/virtualcoach/rest/recipe",
		defaults: {
			name: 'None',
			recipeUrl: 'None',
			imageUrl: 'None',
			ingredients: [],
		}
	});
  return Recipe;
});