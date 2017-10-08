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



// Pull user ingredient list from database
 function GetUserData() {

                              firebase.auth().onAuthStateChanged((user) => 
                              {
                                    if (user) 
                                    {
                                    var UID = user.uid;
                                    }
                                          firebase.database().ref('Users/' + UID + '/ingrArray').on('value', function(snapshot) 
                                          {

                                          //add ingredients to database

                                          var ingrArray = [];
                                          ingrArray = snapshot.val();
                                          


                                                      for ( var i = 0; i <= ingrArray.length; i++)
                                                      {
                                                      var listItem = $("#ingredient-list").append('<li><input id="ingredient-checkbox" type="checkbox">' + ingrArray[i]);
                                                      }
                                          })

                              })

                        }

        window.onload = GetUserData;      



             // ADD INGREDIENT LIST ITEMS

             $("#save-ingr-item").on("click", function(event) {
                 // prevent form from submitting
                 event.preventDefault();

                 // Get the to-do "value" from the textbox and store it a variable
                 var ingrInput = $("#user-ingredient").val();
                 $(".delete-btn-1").show();

                 
                  firebase.auth().onAuthStateChanged((user) => 
                              {
                                    if (user) 
                                    {
                                    var UID = user.uid;
                                    }

                 firebase.database().ref('Users/' + UID + '/ingrArray').on('value', function(snapshot) 
                                          {

                                          var ingrArray = [];
                                          ingrArray = snapshot.val();

                 var dataArrayIngr = ingrArray;

                 $("#user-ingredient").val("");

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

            })
      
 
 






 // ADD RESTRICTED ITEMS

 $("#save-rest-item").on("click", function(event) {
     // prevent form from submitting
     event.preventDefault();

     // Get the to-do "value" from the textbox and store it a variable
     var restInput = $("#user-restriction").val();
     $(".delete-btn-2").show();

     console.log(restInput);

     var dataArrayRest = restrictArray;

     database.ref('Users/' + UID + '/ingrArray').push(dataArrayRest);

     $("#user-restriction").val("");

     console.log(restInput);
     //add list items
     var listItem = $("#restriction-list").append('<li> <input id="restriction-checkbox" type="checkbox">' + restInput);
     restrictArray.push(restInput);
     console.log(restrictArray);

 });