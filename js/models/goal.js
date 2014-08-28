define(['underscore','backbone'], function(_, Backbone) {
  var Goal = Backbone.Model.extend({
  	initialize: function (options){
      this.id = options.id;
    },
    url: function () {
      return "/storage/goal/" + this.id;
    },

		defaults: {
			"goalDateEnd": 0,
		    "goalDateStart": 0,
		    "goalType": 0,
		    "goalValue": 0,
		    "id": 0,
		    "title": "None",
		    "updatedAt": 0,
		    "userId": 0
		}
	});
  return Goal;
});