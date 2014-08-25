// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/quoteView',
  'views/recipeView',
  'views/placeView',
  'views/goalView',
  'views/dataView'
], function($, _, Backbone, QuoteView, RecipeView, PlaceView, GoalView, DataView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '' : 'home',
      'goal/:goalId' : "goal"
    }
  });
  
  var initialize = function(){
    
    var app_router = new AppRouter;
    
    app_router.on('route:home', function(){//id){
    
      var quoteView = new QuoteView();
      quoteView.render();
      var recipeView = new RecipeView();
      recipeView.render();
      var placeView = new PlaceView();
      placeView.render();
      var goalView = new GoalView();
      goalView.render();//{id: id});

    });

    app_router.on('route:goal', function (goalId) {
        var dataView = new DataView()
        dataView.render({goalId: goalId});
      });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});