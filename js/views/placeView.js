define([
  'jquery',
  'underscore',
  'backbone',
  'collections/placeList',
  'text!templates/place/placeTemplate.html'
], function($, _, Backbone, PlaceList, placeTemplate){
  var PlaceView = Backbone.View.extend({
    el: '.gmap',
    render: function(){
      var that = this; 
      var places = new PlaceList();
      places.fetch({
        success : function (places) {
          
          // console.log("places");
          // console.log(places);
          // console.log("places.models");
          // console.log(places.models);
          // console.log("places.toJSON");
          // console.log(places.toJSON());
          var template = _.template(placeTemplate, {places: places.models});
          that.$el.html(template);    
        }
      });
      
    }
  });
  // Our module now returns our view
  return PlaceView;
});