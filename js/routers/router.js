// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/quoteView',
  'views/recipeView',
  'views/placeView'
], function($, _, Backbone, QuoteView, RecipeView, PlaceView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '' : 'home'
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

    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});