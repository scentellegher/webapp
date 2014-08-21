define(['underscore','backbone'], function(_, Backbone) {
  var Quote = Backbone.Model.extend({
  		urlRoot: "http://localhost:8084/virtualcoach/rest/quote/negative",
		defaults: {
			type: 'Unknown',
			text: 'None'
		}
	});
  return Quote;
});