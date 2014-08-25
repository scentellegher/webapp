define(['underscore','backbone'], function(_, Backbone) {
  var Recipe = Backbone.Model.extend({
  		urlRoot: "/recipe",
		defaults: {
			name: 'None',
			recipeUrl: 'None',
			imageUrl: 'None',
			ingredients: [],
		}
	});
  return Recipe;
});