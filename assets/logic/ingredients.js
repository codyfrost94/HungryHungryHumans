 $(document).ready(function() {
     $(".delete-btn-1").hide();
     $(".delete-btn-2").hide();
 });


 var database = firebase.database();
 var uid11;



 // ADD INGREDIENT LIST ITEMS

 $("#save-ingr-item").on("click", function(event) {
     // prevent form from submitting
     event.preventDefault();

     // Get the to-do "value" from the textbox and store it a variable
     var ingrInput = $("#user-ingredient").val();
     $(".delete-btn-1").show();


     // function reset() {
     //     firebase.database().ref('/Users/' + rM1).update({
     //             p1Button: "enable",
     //             p2Button: "enable",
     //             buttonColor: "blue",
     //             anotherGame: false
     firebase.database().ref('Users/' + UID + '/ingrArray').on('value', function(snapshot) {

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