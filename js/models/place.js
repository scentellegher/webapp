define(['underscore','backbone'], function(_, Backbone) {
  var Place = Backbone.Model.extend({
		defaults: {
			name: 'None',
			address: 'None',
			type: 'None',
			latitude: 'None',
			longitude: 'None'
		}
	});
  return Place;
});