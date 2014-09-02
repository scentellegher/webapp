define([
  'underscore',
  'backbone',
  'models/goal'
], function(_, Backbone, Goal){
  var GoalList = Backbone.Collection.extend({
  	initialize: function (options){
      this.id = options.id;
    },
    model: Goal,
    url: function () {
      return "/storage/goals/" + this.id;
    },
    parse: function (response) {
      return response.goals; // The rest server returns datapoints under "datapoints".
    }
  });
  return GoalList;
});

    