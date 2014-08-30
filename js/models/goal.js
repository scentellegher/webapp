define(['underscore','backbone'], function(_, Backbone) {
  var Goal = Backbone.Model.extend({
  	// initialize: function (options){
   //    this.id = options.id;
   //  },
    	urlRoot: "/storage/goal",
		defaults: {
			"goalDateEnd": 0,
		    "goalDateStart": 0,
		    "goalType": 0,
		    "goalValue": 0,
		    "id": 0,
		    "title": "None",
		    "updatedAt": 0,
		    "userId": 0
		}
		// ,
		// sync: function(method, model, options){
  //       	return $.ajax({
	 //            type: 'PUT',
	 //            contentType:'application/json',
	 //            beforeSend:   function(xhr) {
  //               	xhr.setRequestHeader('X-HTTP-Method-Override', 'PUT');
  //           	},
	 //            dataType: 'json',
	 //            url: '/storage/goal'
  //       	});
  //   	}
	});
  return Goal;
});

// $.ajax({
// 			  type: "POST",
// 			  url: "http://127.0.0.1:5910/"+localStorage.getItem("uid")+"/goals",  //idPerson
// 			  data: JSON.stringify(obj),
// 			  dataType: "json",
// 			  contentType: "application/json",

// return $.ajax({
//             type:         'POST',
//             contentType:  'application/x-www-form-urlencoded',
//             beforeSend:   function(xhr) {
//                 xhr.setRequestHeader('X-HTTP-Method-Override', 'POST');
//             },
//             dataType:     'json',
//             url:          '/index?id=' + this.get('id') + '&email=' + this.get('email')
//         });