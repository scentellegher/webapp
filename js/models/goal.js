define(['underscore','backbone'], function(_, Backbone) {
  var Goal = Backbone.Model.extend({
  	// initialize: function (options){
   //    this.id = options.id;
   //  },
    	urlRoot: "/storage/goal",
		defaults: {
			"goalDateEnd": 0,
		    "goalDateStart": 0,
		    "goalType": 0,
		    "goalValue": 0,
		    "id": null,
		    "title": "None",
		    "updatedAt": 0,
		    "userId": 0
		}
	});
  return Goal;
});
