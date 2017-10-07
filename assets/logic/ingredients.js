$(document).ready(function() {
    $(".delete-btn-1").hide();
    $(".delete-btn-2").hide();
});



var database = firebase.database();

//add ingredients to database


var ingrArray = [];
var restrictArray = [];

// ADD INGREDIENT LIST ITEMS

$("#save-ingr-item").on("click", function(event) {
      // prevent form from submitting
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      var ingrInput = $("#user-ingredient").val();
	$(".delete-btn-1").show();
	
      console.log(ingrInput);
	
	var dataArrayIngr = ingrArray;
	
	database.ref().push(dataArrayIngr);

$("#user-ingredient").val("");
      	
      	console.log(ingrInput);
      	//add list items
      	var listItem = $("#ingredient-list").append('<li><input id="ingredient-checkbox" type="checkbox">' + ingrInput);
      	ingrArray.push(ingrInput);
      	console.log(ingrArray);

      	});

// ADD RESTRICTED ITEMS

$("#save-rest-item").on("click", function(event) {
      // prevent form from submitting
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      var restInput = $("#user-restriction").val();
	$(".delete-btn-2").show();
	
      console.log(restInput);
	
	var dataArrayRest = restrictArray;
	
	database.ref().push(dataArrayRest);

$("#user-restriction").val("");
      	
      	console.log(restInput);
      	//add list items
      	var listItem = $("#restriction-list").append('<li> <input id="restriction-checkbox" type="checkbox">' + restInput);
      	restrictArray.push(restInput);
      	console.log(restrictArray);

      	});



                
                 


            

      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      //};





