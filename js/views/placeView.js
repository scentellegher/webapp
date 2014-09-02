define([
  'jquery',
  'underscore',
  'backbone',
  'collections/placeList',
  'gmaps',
  'text!templates/place/placeTemplate.html'
], function($, _, Backbone, PlaceList, gmaps, placeTemplate){
  var PlaceView = Backbone.View.extend({
    el: '#mappa',
    initialize: function(){
      this.places = new PlaceList();

      var template = _.template(placeTemplate);
      this.$el.html(template);  
    },
    render: function(places){
      var that = this; 
      this.places.fetch({
        success : function (places) {
          //set position
          var myPos = new gmaps.LatLng(46.069744, 11.118982);
          console.log(myPos);
          //create list of points
          var points = [];
          //for each place
          var ico = '';
          _.each(places.models, function(place){
            
              if(place.get('type')=='gym'){
                ico = 'img/weight.png';  
              }else{
                ico = 'img/jogging.png';
              }
            points.push({
              
              title: place.get('name'),
              position: new gmaps.LatLng(place.get('latitude'), place.get('longitude')),
              icon: ico
            });  
          });

          // define map options
          var mapOptions = {
            center: myPos,
            zoom: 14
          };

          // init map
          var map = new gmaps.Map(document.getElementById("map-canvas"), mapOptions);
          
          // define markers
          var markers = [];
          _.each(points, function(point){
            markers.push(new gmaps.Marker(point));
          });

          // add markers to map
          _.each(markers, function(marker){
            marker.setMap(map);
          });
        }
      });
    }
  });
  
  return PlaceView;
});