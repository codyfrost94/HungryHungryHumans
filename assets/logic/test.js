 // var config = {
 //     apiKey: "AIzaSyDC8mMDrVv6YZX_fhhet5Css6o4MJ8IC_g",
 //     authDomain: "hungryhungryhumans-44f29.firebaseapp.com",
 //     databaseURL: "https://hungryhungryhumans-44f29.firebaseio.com",
 //     projectId: "hungryhungryhumans-44f29",
 //     storageBucket: "",
 //     messagingSenderId: "473842520592"
 // };
 // firebase.initializeApp(config);
 console.log("sup");

 // This is logic to create an array for the searchable recipe ingredients
 //depends on IDs so we need to make sure our IDs are all clean

 var tempIngr = [];

 $("#add-recipe-ingredient").on("click", function(event) {
     event.preventDefault();

     tempIngr.push($("#recipe-ingredients").val().trim());
     $("#recipe-ingredients").val("");
     console.log(tempIngr);

 });


 function addRecipe() {

     event.preventDefault();

     var recipeName = $("#recipe-title").val().trim();
     var recipeInstructions = $("#instructions").val().trim();
     var recipeCuisine = $("#cuisine-type").val().trim();

     console.log("Ingredients: " + tempIngr);

     var newRecipe = {
         name: recipeName,
         cuisine: recipeCuisine,
         ingredients: tempIngr,
         instructions: recipeInstructions,
     }

     firebase.database().ref('/Recipes/' + newRecipe.name).set(newRecipe);

     $("#recipe-title").val("");
     $("#instructions").val("");
     tempIngr = []
     $("#cuisine-type").val("");



     console.log(newRecipe);
 }


 $("#add-recipe2").on("click", function(event) {

     addRecipe();

 });

 var db = firebase.database();
 var ref = db.ref("Recipes");
 ref.orderByChild("name").on("child_added", function(snapshot) {
 	console.log(snapshot.val());
     console.log("this recipe is called " + snapshot.val().name + " and is made with " + snapshot.val().ingredients);
 });








 var IngrJSON = [

     {
         name: "Noodles"

     },
     {
         name: "Eggs"

     },
     {
         name: "Butter"

     },
     {
         name: "Bread"

     },
     {
         name: "Hot Sauce"

     },
 ]


 function addAllIngredients(ingredients) {
     let ref = firebase.database().ref('ingredients')
     ref.remove(function() {
         for (var i = 0; i < ingredients.length; i++) {
             firebase.database().ref('ingredients/' + ingredients[i].name).set(ingredients[i])

         }
     })


 }

 addAllIngredients(IngrJSON)