define([
  'jquery',
  'underscore',
  'backbone',
  'collections/placeList',
  'gmaps',
  'text!templates/place/placeTemplate.html'
], function($, _, Backbone, PlaceList, gmaps, placeTemplate){
  var PlaceView = Backbone.View.extend({
    el: '.mappa',
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
          _.each(places.models, function(place){
              console.log(place.get('name'));
              console.log(place.get('latitude'));
              console.log(place.get('longitude'));
            points.push({
              
              title: place.get('name'),
              position: new gmaps.LatLng(place.get('latitude'), place.get('longitude')),
              icon: 'img/jogging.png' 
            });  
          });
          console.log("lunghezza="+points.length);

          // define map options
          var mapOptions = {
            center: myPos,
            zoom: 8
          };

          console.log(mapOptions);
          // init map
          
          console.log("esiste? "+ document.getElementById("map-canvas"));
          var map = new gmaps.Map(document.getElementById("map-canvas"), mapOptions);
          
          // define markers
          var markers = [];
          _.each(points, function(point){
            markers.push(new gmaps.Marker(point));
          });
          console.log(markers);
          // add markers to map
          _.each(markers, function(marker){
            marker.setMap(map);
          });
              
        }
      });
    }
  });
  // Our module now returns our view
  return PlaceView;
});