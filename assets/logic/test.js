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


 $("#add-recipe2").on("click", function(event) {
    event.preventDefault();

	var recipeName = $("#recipe-title").val().trim();
    var recipeInstructions = $("#instructions").val().trim();
    var recipeIngredients = tempIngr
    var recipeCuisine = $("#cuisine-type").val().trim();

    var newRecipe = {
    	name: recipeName,
    	cuisine: recipeCuisine,
    	ingredients:recipeIngredients,
    	instructions:recipeInstructions,
    }

    $("#recipe-title").val("");
    $("#instructions").val("");
    tempIngr = []
    $("#cuisine-type").val("");



    console.log(newRecipe);
});



// var sampleObjectJSON = {

// "chickenNoodleSoup1": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 5
// }

// "chickenNoodleSoup2": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 10
// }

// "chickenNoodleSoup3": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 15
// }

// "chickenNoodleSoup4": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 20
// }

// "chickenNoodleSoup5": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 25
// }

// "chickenNoodleSoup6": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 30
// }

// "chickenNoodleSoup7": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 35
// }

// "chickenNoodleSoup8": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 40
// }

// "chickenNoodleSoup9": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 45
// }

// "chickenNoodleSoup10": {
//     name: "Chicken Noodle Soup",
//     instructions: "Classis soul food with Chicken, noodles, and vegetables in a hearty broth",
//     ingredientsMain: ["Chicken", "Pasta", "Broth", "Vegetables"]
//     cookTimeMinutes: 50
// }

// }






