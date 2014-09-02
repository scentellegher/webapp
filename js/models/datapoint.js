define(['underscore','backbone'], function(_, Backbone) {
  var Datapoint = Backbone.Model.extend({
    urlRoot: "/storage/datapoint",
		defaults: {
			"description": "None",
            "goalId": 0,
            "id": 0,
            "timestamp": 0,
            "value": 0
		}
	});
  return Datapoint;
});