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
				if(that.goal){//if goal defined
					$('#dateStart').val(that.goal.get('goalDateStart'))
				}else{
					$('#dateStart').val(new Date().getTime());
				}
			}else{
				$('#dateStart').val(new Date($('#dateStart').val()).getTime());
			}

			if($('#dateEnd').val()==''){
				if(that.goal){//if goal defined
					$('#dateEnd').val(that.goal.get('goalDateEnd'))
				}else{
					$('#dateEnd').val(new Date().getTime());
				}
			}else{
				$('#dateEnd').val(new Date($('#dateEnd').val()).getTime());
			}

			var goalDetails = $(event.currentTarget).serializeObject();
			console.log(goalDetails);
			var goal = new Goal();
			goal.save(goalDetails, {
				url: '/storage/goal',
				success : function () {
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render({path: ""});
				}
			});
			return false;
		},
		deleteGoal : function (event) {
			this.goal.destroy({
				success : function () {
					//that.router.navigate("", {trigger : true});//does not work
					var succView = new SuccessView();
					succView.render({path: ""});
				}
			});
			return false;
		}
	});
	return EditView;
});