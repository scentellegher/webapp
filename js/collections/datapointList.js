define([
  'underscore',
  'backbone',
  'models/datapoint'
], function(_, Backbone, Datapoint){
  var DatapointList = Backbone.Collection.extend({
    initialize: function (options){
      this.id = options.id;
    },
  	model: Datapoint,
  	url: function () {
      return "/storage/datapoints/" + this.id;
    },
  	parse: function (response) {
  		return response.datapoints; // The rest server returns datapoints under "datapoints".
  	}
  });
  return DatapointList;
});