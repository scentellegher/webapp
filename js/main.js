require.config({
  paths: {
    "jquery" : "libs/jquery-2.1.1.min",
    "underscore" : "libs/underscore-min",
    "backbone" : "libs/backbone-min",
    "bootstrap" : "libs/bootstrap.min",
    "text" : "libs/text",
    "async": "libs/async",
    "goog": 'libs/goog',
    "propertyParser" : 'libs/propertyParser',
    "router" : "routers/router",
    "templates": '../templates'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'bootstrap' : {
      deps:["jquery"],
      exports: '$.fn.popover'
    },
    'backbone': {
      deps: ["underscore", "jquery"],
      exports: 'Backbone'
    }
  }
});

//http://blog.millermedeiros.com/requirejs-2-0-delayed-module-evaluation-and-google-maps/
// convert Google Maps into an AMD module
define('gmaps', ['async!http://maps.google.com/maps/api/js?v=3&key=<MY_KEY>&sensor=false'], 
  function(){
    // return the gmaps namespace for brevity
    return window.google.maps;
});


  //To load google libraries you should follow the format "goog!moduleName,version,packages:[packages],language:en,anotherOption:value"
define('gchart', ['goog!visualization,1,packages:[corechart]'], function(){
    return google.visualization;
});


require(['app'], 
    function(App){
      App.initialize();
    }
);
