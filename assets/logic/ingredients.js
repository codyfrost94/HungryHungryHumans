// Initiialize firebase



//var database = firebase.database();

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

      	$("#save-ingr-item").empty();



      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      //};



});

