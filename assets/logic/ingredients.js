// Initiialize firebase



//var database = firebase.database();

//add ingredients to database


var itemArray = [];

//create an array

$("#save-ingr-item").on("click", function(event) {
      // prevent form from submitting
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      var itemValue = $("#user-ingredient").val().trim();
      console.log(itemValue);
      itemArray.push(itemValue);
      console.log(itemArray);


      for (var i = 0; i < itemArray.length; i++) {
      	
      	console.log(itemArray[i]);
      	//add list items
      	var listItem = $("#ingredient-list").append("<li>" + itemArray[i]);

      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      };



});

