define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
  
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = 'http://localhost:8084/virtualcoach/rest' + options.url;
      options.crossDomain ={
        crossDomain: true
      };
    
});
    
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});