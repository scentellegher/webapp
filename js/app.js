define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
  
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = 'http://localhost:8084/virtualcoach/rest' + options.url;
      options.crossDomain ={
        crossDomain: true
      };
    });

    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
    };

    Router.initialize();        
    
  };

  return { 
    initialize: initialize
  };
});