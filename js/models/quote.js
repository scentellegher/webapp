define(['underscore','backbone'], function(_, Backbone) {
  var Quote = Backbone.Model.extend({
  		urlRoot: "/quote/negative",
		defaults: {
			type: 'Unknown',
			text: 'None'
		}
	});
  return Quote;
});