define([
  'jquery',
  'underscore',
  'backbone',
  'views/quoteView',
  'views/recipeView',
  'views/placeView',
  'views/goalView',
  'views/dataView',
  'views/editGoalView',
  'views/editDatapointView'
], function($, _, Backbone, QuoteView, RecipeView, PlaceView, GoalView, DataView, EditGoalView, EditDatapointView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '' : 'home',
      'goal/:goalId' : "goal",
      'edit/:id' : "editGoal",
      'new' : "editGoal",
      'goal/:goalId/datapoint/edit/:id' : "editDatapoint",
      'goal/:goalId/datapoint/new' : "editDatapoint"
    }
  });
  
  var initialize = function(){
    
    var app_router = new AppRouter;
    
    app_router.on('route:home', function(){
      var quoteView = new QuoteView();
      quoteView.render();
      var recipeView = new RecipeView();
      recipeView.render();
      var placeView = new PlaceView();
      placeView.render();
      var goalView = new GoalView();
      goalView.render();

    });

    app_router.on('route:goal', function (goalId) {
        var dataView = new DataView()
        dataView.render({goalId: goalId});
    });

    app_router.on('route:editGoal', function (id) { 
        var editGoalView = new EditGoalView({router: app_router});
        editGoalView.render({id: id});
    });

    app_router.on('route:editDatapoint', function (goalId, id) {
        var editDatapointView = new EditDatapointView({router: app_router});
        editDatapointView.render({ goalId: goalId, id: id });
    });

    Backbone.history.start();
    
  };

  return { 
    initialize: initialize
  };
});