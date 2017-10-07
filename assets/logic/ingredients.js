$(document).ready(function() {
    $(".delete-btn-1").hide();
    $(".delete-btn-2").hide();
});
// Initiialize firebase

// var config = {
//     apiKey: "AIzaSyDC8mMDrVv6YZX_fhhet5Css6o4MJ8IC_g",
//     authDomain: "hungryhungryhumans-44f29.firebaseapp.com",
//     databaseURL: "https://hungryhungryhumans-44f29.firebaseio.com",
//     projectId: "hungryhungryhumans-44f29",
//     storageBucket: "",
//     messagingSenderId: "473842520592"
// };
// firebase.initializeApp(config);



var database = firebase.database();

//add ingredients to database


var ingrArray = [];

//var ingrInput = $("#user-ingredient").val();

//create an array

$("#save-ingr-item").on("click", function(event) {
      // prevent form from submitting
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      //var itemValue = $("#user-ingredient").val().trim();
      var ingrInput = $("#user-ingredient").val();
	$(".delete-btn-1").show();
      //console.log(itemValue);
      //ingrInput.push(itemValue);
      console.log(ingrInput);

      //$("ingredient-list").empty();


      //for (var i = 0; i < ingrInput.length; i++) {
      	
      	console.log(ingrInput);
      	//add list items
      	var listItem = $("#ingredient-list").append('<li><input id="ingredient-checkbox" type="checkbox">' + ingrInput);
      	ingrArray.push(ingrInput);
      	console.log(ingrArray);

      	$("#user-ingredient").val("");



                
                 


            

      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      //};



});

