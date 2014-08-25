define(['underscore','backbone'], function(_, Backbone) {
  var Datapoint = Backbone.Model.extend({
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