// Initiialize firebase

 var config = {
     apiKey: "AIzaSyDC8mMDrVv6YZX_fhhet5Css6o4MJ8IC_g",
     authDomain: "hungryhungryhumans-44f29.firebaseapp.com",
     databaseURL: "https://hungryhungryhumans-44f29.firebaseio.com",
     projectId: "hungryhungryhumans-44f29",
     storageBucket: "",
     messagingSenderId: "473842520592"
 };
 firebase.initializeApp(config);



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

                firebase.database().ref("/users/" + "u8MFRDzoi0TppuJC0H5ZynccIR72").update({
                  'item 1': "bla bla"

                 


            })

      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      };



});

