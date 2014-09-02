define([
  'jquery',
  'underscore',
  'backbone',
  'models/goal',
  'models/datapoint',
  'views/successView',
  'text!templates/datapoint/editDatapointTemplate.html'
], function($, _, Backbone, Goal, Datapoint, SuccessView, editDatapointTemplate){

	var EditDatapointView = Backbone.View.extend({
		el : ".content",
		initialize: function(options) {
            // get router from constructior options
            this.router = options.router;
            console.log(this.router);
        },
		render : function (options){
			this.path = "#/goal/"+options.goalId;
			var that = this;
			if(options.id){// if i have datapoint id -> PUT
				that.mydatap = new Datapoint({id: options.id});
				that.mydatap.fetch({
					success: function (){
						var template = _.template(editDatapointTemplate, {datapoint: that.mydatap});
						that.$el.html(template);
					}
				});
			} else {//else POST
				var template = _.template(editDatapointTemplate, {datapoint: null, goalId: options.goalId});
				that.$el.html(template);
			}
		},
		events: {
			"submit .editDatapointForm" : "saveDatapoint",
		 	"click .delete" : "deleteDatapoint"
		},
		path: "#/goal/",
		saveDatapoint: function(event) {
			var that=this;
			var dataDetails = $(event.currentTarget).serializeObject();
			console.log(dataDetails);
			var datapoint = new Datapoint();
			datapoint.save(dataDetails, {
				url: '/storage/datapoint',
				success : function () {
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render({path: ""});
				}
			});
			return false;
		},
		deleteDatapoint: function() {
			this.mydatap.destroy({
				success : function () {
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render({path: ""});
				}
			});
		}
	});
	return EditDatapointView;
});