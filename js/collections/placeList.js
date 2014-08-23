define([
  'underscore',
  'backbone',
  'models/place'
], function(_, Backbone, Place){
  var PlaceList = Backbone.Collection.extend({
  	model: Place,
  	url: "http://localhost:8084/virtualcoach/rest/places/46.069744, 11.118982", //trento
  	parse: function (response) {
  		return response.places; // The rest server returns the google places under "places".
  	}
  });
  return PlaceList;
});