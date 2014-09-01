define([
  'jquery',
  'underscore',
  'backbone',
  'models/goal',
  'views/successView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/goal/editGoalTemplate.html'
], function($, _, Backbone, Goal, SuccessView, editGoalTemplate){

	var EditView = Backbone.View.extend({
		el : ".content",
		initialize: function(options) {
            // get router from constructior options
            this.router = options.router;
            console.log(this.router);
        },
		render : function (options){
			var that = this;
			if(options.id){//if i have the id: PUT
				that.goal = new Goal({id: options.id});
				that.goal.fetch({
					success: function (goals) {
						var template = _.template(editGoalTemplate, {goal: that.goal});
						that.$el.html(template);
						console.log($('#datetimepicker'));
						$('#datetimepicker').datetimepicker();
						$('#datetimepicker2').datetimepicker();				
					}
				});	
			}else{//POST
				var template = _.template(editGoalTemplate, {goal: null});
				that.$el.html(template);
				$('#datetimepicker').datetimepicker();
				$('#datetimepicker2').datetimepicker();				
			}
			
						
		},
		events: {
			"submit .editGoalForm" : "saveGoal",
			"click .delete" : "deleteGoal"
		},
		saveGoal : function (event){
			var that = this;

			//set correct date
			if($('#dateStart').val()==''){
				console.log("object void");
				if(that.goal){//if goal defined
					console.log("goal def old date");
					$('#dateStart').val(that.goal.get('goalDateStart'))
				}else{
					console.log("goal NOT def new date");
					$('#dateStart').val(new Date().getTime());
				}
			}else{
				console.log("object selected");
				$('#dateStart').val(new Date($('#dateStart').val()).getTime());
			}

			if($('#dateEnd').val()==''){
				console.log("object void");
				if(that.goal){//if goal defined
					console.log("goal def old date");
					$('#dateEnd').val(that.goal.get('goalDateEnd'))
				}else{
					console.log("goal NOT def new date");
					$('#dateEnd').val(new Date().getTime());
				}
			}else{
				console.log("object selected");
				$('#dateEnd').val(new Date($('#dateEnd').val()).getTime());
			}

			var goalDetails = $(event.currentTarget).serializeObject();
			console.log(goalDetails);
			var goal = new Goal();
			goal.save(goalDetails, {
				url: '/storage/goal',
				success : function () {
					console.log("success");
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render();
				}
			});
			return false;
		},
		deleteGoal : function (event) {
			this.goal.destroy({
				success : function () {
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render();
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