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

     var recipeName = $("#create-recipe-title").val().trim();
     var recipeInstructions = $("#instructions").val().trim();
     var recipeCuisine = $("#create-cuisine-type").val().trim();

     console.log("Ingredients: " + tempIngr);

     var newRecipe = {
         name: recipeName,
         cuisine: recipeCuisine,
         ingredients: searchableIngr,
         instructions: recipeInstructions,
     }

     firebase.database().ref('/Recipes/').push(newRecipe);

     $("#create-recipe-title").val("");
     $("#instructions").val("");
     searchableIngr = []
     $("#create-cuisine-type").val("");



     console.log(newRecipe);
 }


 $("#add-recipe2").on("click", function(event) {

     addRecipe();

 });

 // var db = firebase.database();
 // var ref = db.ref("Recipes");
 // ref.orderByChild("name").equalTo("Test").on("child_added", function(snapshot) {
 //     console.log(snapshot.val());
 //     // console.log("this recipe is called " + snapshot.val().name + " and is made with " + snapshot.val().ingredients);
 // });

 function apiCall() {
     var q = $("#recipe-title").val().trim();
     var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=d930995b&_app_key=0478f2c3ea2c7a5234c78816e1d521c2&q=" + q

     $.ajax({
         url: queryURL,
         method: "GET"
     }).done(function(response) {
         console.log(queryURL);
         console.log(response.matches);

         for (i = 0; i < response.matches.length; i++) {
             console.log(response.matches[i]);
             var r = response.matches[i];
             var rName = r.recipeName;
             var rCourse = r.attributes.course;
             var rCuisine = r.attributes.cuisine;
             var rIngredients = r.ingredients
             console.log(rName);
             console.log(rIngredients);
             console.log(rCourse);
             console.log(rCuisine);




         }

     });

 }

 function searchRecipe() {

     $("#search-results").removeClass("hidden");


     event.preventDefault();

     var displayDiv = $("#display-results-panel");
     var searchName = $("#recipe-title").val().trim();
     var searchIngr = searchableIngr
     var db = firebase.database();
     var ref = db.ref("Recipes");
     ref.orderByChild("name").equalTo(searchName).on("child_added", function(snapshot) {
         console.log("------------------------------")
         console.log(snapshot.val());
         console.log("------------------------------")

         var recipeName = snapshot.val().name;
         var recipeIngr = snapshot.val().ingredients;
         var recipeCuisine = snapshot.val().cuisine;
         var recipeInstructions = snapshot.val().instructions;

         console.log(recipeIngr);

         var newDiv = $("<div class='panel panel-primary'>");
         var nameDiv = $("<div class = 'panel-heading'>");
         var bodyDiv = $("<div class='panel-body'>");
         var cuisineDiv = $("<h5>");

         // var ingrDiv = $("<div>");
         // for (i=0; i<recipeIngr.length; i++){
         // 	var z = $("h5");
         // 	z.text(i);
         // 	ingrDiv.append(z);

         // 	console.log(i);
         // };

         var instructionsP = $("<p class = 'instr-p'>");
         instructionsP.text(recipeInstructions);




         cuisineDiv.text("Cuisine: " + recipeCuisine);
         console.log("Cuisine Div: " + cuisineDiv.text());
         nameDiv.text(recipeName);



         console.log(newDiv);

         bodyDiv.append(cuisineDiv, instructionsP);
         newDiv.append(nameDiv, bodyDiv);
         displayDiv.append(newDiv);




         // var recipeDisplay = $("<div class='panel panel-primary'>");
         // var recipeDisplayName = $("<div class='panel-heading'>".text(recipeName));
         // recipeDisplay.append(recipeDisplay);
         // displayDiv.append(recipeDisplay);



         // console.log(recipeName);
         // console.log(recipeIngr);
         // for (i=0;i<recipeIngr.length;i++) {
         // 	var ingrItem = recipeIngr[i];
         // 	console.log("Ingredient number " + (i+1) + " is " + ingrItem);
         // }
         // console.log(recipeCuisine);
         // console.log(recipeInstructions);
         // console.log("------------------------------")



     });




 }

 $("#add-recipe").on("click", function(event) {

     $("#display-results-panel").empty();

     searchRecipe();
     apiCall();


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