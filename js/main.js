require.config({
  paths: {
    "jquery" : "libs/jquery-2.1.1.min",
    "underscore" : "libs/underscore-min",
    "backbone" : "libs/backbone-min",
    "bootstrap" : "libs/bootstrap.min",
    "text" : "libs/text",
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

require(['app'], 
    function(App){
      App.initialize();
    }
);