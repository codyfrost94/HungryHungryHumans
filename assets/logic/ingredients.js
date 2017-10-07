 var config = {
     apiKey: "AIzaSyDC8mMDrVv6YZX_fhhet5Css6o4MJ8IC_g",
     authDomain: "hungryhungryhumans-44f29.firebaseapp.com",
     databaseURL: "https://hungryhungryhumans-44f29.firebaseio.com",
     projectId: "hungryhungryhumans-44f29",
     storageBucket: "",
     messagingSenderId: "473842520592"
 };

$(document).ready(function() {
    $(".delete-btn-1").hide();
    $(".delete-btn-2").hide();
});

var database = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
      if (user) {
            console.log("Ingredients list " + user.uid);
            var UID = user.uid;

            var dataStuff = firebase.database().ref('Users/' + UID + '/ingrArray' );

            dataStuff.on('value', function(snapshot) {

                var ingrArray = [];
                ingrArray = snapshot.val();


//add ingredients to database

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

            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Ingredients list " + user.uid);
                var UID = user.uid;


                firebase.database().ref('/Users/' + UID).update({
                    ingrArray

                })
            }
            })
            })


            })
      }
})


    






// function reset() {
//     firebase.database().ref('/Users/' + rM1).update({
//             p1Button: "enable",
//             p2Button: "enable",
//             buttonColor: "blue",
//             anotherGame: false

// })}



// onAuthStateChanged(firebaseUser => {

//      if (firebaseUser) {
//          console.log(firebaseUser.uid);
//          btnLogout.classList.remove('hide');
//      } else {
//          console.log("not logged in");
//          btnLogout.classList.remove('hide');

//      }

//        pushedRef = firebase.database().ref().push({
//                  uid: firebaseUser.uid 
//              })
              

//  })



                
                 


            

      	//var checkbox = $('<input id="ingredient-checkbox" type="checkbox">');

      	//add checkbox to each list item
      	//listItem.prenpend("checkbox")

      //};





