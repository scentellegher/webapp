define([
  'jquery',
  'underscore',
  'backbone',
  'models/goal',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/goal/editGoalTemplate.html'
], function($, _, Backbone, Goal, editGoalTemplate){

	var EditView = Backbone.View.extend({
		el : ".content",
		render : function (options){
			var that = this;
			that.goal = new Goal({id: options.id});
			that.goal.fetch({
				success: function (goals) {
					var template = _.template(editGoalTemplate, {goal: that.goal});
					that.$el.html(template);		
				}
			});			
		},
		events: {
			"submit .editGoalForm" : "saveGoal"
		},
		saveGoal : function (event){
			console.log("SAVEEEEEEEEEEEEE");
			var goalDetails = $(event.currentTarget).serializeObject();
			console.log(goalDetails);
			var goal = new Goal();
			console.log("SAVEEEEEEEEEEEEE");
			goal.save(goalDetails, {
				url: '/storage/goal',
				success : function (goal) {
					Router.navigate('', {trigger : true});//torno alla home
				}
			});
			return false;
		}
	});
	return EditView;
});


// var EditUser = Backbone.View.extend({
// 				el : ".page",
// 				render : function (options) {
// 					var that = this; 
// 					if(options.id){
// 						that.user = new User({id : options.id});
// 						that.user.fetch({ // i know the id GET /users/{id}
// 							success : function (user) {
// 								console.log(user);
// 								var template = _.template($("#edit-user-template").html(), {user: user});
// 								that.$el.html(template);		
// 							}
// 						}); 
// 					} else {
// 						console.log("entra ELSE");
// 						var template = _.template($("#edit-user-template").html(), {user: null});
// 						this.$el.html(template);		
// 					}
// 				},
// 				events : {
// 					"submit .edit-user-form" : "saveUser",
// 					"click .delete" : "deleteUser"
// 				},
// 				saveUser : function (ev) {
// 					var userDetails = $(ev.currentTarget).serializeObject();
// 					var user = new User();
// 					user.save(userDetails, {
// 						success : function (user) {
// 							router.navigate('', {trigger : true});//torno alla home
// 						}
// 					});
// 					console.log(userDetails);
// 					return false; //do not refresh the browser
// 				},
// 				deleteUser : function (ev) {
// 					this.user.destroy({
// 						success : function () {
// 							router.navigate('', {trigger : true});//torno alla home
// 						}
// 					});
// 					return false;
// 				}
// 			});