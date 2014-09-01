define([
  'jquery',
  'underscore',
  'backbone',
  'views/quoteView',
  'views/recipeView',
  'views/placeView',
  'views/goalView',
  'views/dataView',
  'views/editView'
], function($, _, Backbone, QuoteView, RecipeView, PlaceView, GoalView, DataView, EditView){
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '' : 'home',
      'goal/:goalId' : "goal",
      'edit/:id' : "edit",
      'new' : "edit"
    }
  });
  
  var initialize = function(){
    
    var app_router = new AppRouter;
    
    app_router.on('route:home', function(){
      console.log("ROUTE"+this.routes[Backbone.history.fragment]);
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
           console.log("ROUTE"+this.routes[Backbone.history.fragment]);
        var dataView = new DataView()
        dataView.render({goalId: goalId});
    });

    app_router.on('route:edit', function (id) {
           console.log("ROUTE"+this.routes[Backbone.history.fragment]);
        var editView = new EditView({router: app_router});
        editView.render({id: id});
    });


    Backbone.history.start();
    
  };

  return { 
    initialize: initialize
  };
});