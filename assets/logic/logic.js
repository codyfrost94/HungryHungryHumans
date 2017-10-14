 var config = {
 	apiKey: "AIzaSyDC8mMDrVv6YZX_fhhet5Css6o4MJ8IC_g",
 	authDomain: "hungryhungryhumans-44f29.firebaseapp.com",
 	databaseURL: "https://hungryhungryhumans-44f29.firebaseio.com",
 	projectId: "hungryhungryhumans-44f29",
 	storageBucket: "",
 	messagingSenderId: "473842520592"
 };
 firebase.initializeApp(config);

 const txtEmail = document.getElementById('txtEmail');
 const txtPassword = document.getElementById('txtPassword');
 const btnLogin = document.getElementById('btnLogin');
 const btnSignUp = document.getElementById('btnSignUp');
 const btnLogout = document.getElementById('btnLogout');

 btnLogin.addEventListener('click', e => {

 	const email = txtEmail.value;
 	const pass = txtPassword.value;
 	const auth = firebase.auth();

 	// Sign in
 	const promise = auth.signInWithEmailAndPassword(email, pass);
 	promise.catch(e => console.log(e.message));
 	promise.catch(e => alert(e.message));
 });

 // Add signup event

 btnSignUp.addEventListener('click', e => {

 	// TODO: Check for real emailsz

 	const email = txtEmail.value;
 	const pass = txtPassword.value;
 	const auth = firebase.auth();

 	// Sign in
 	const promise = auth.createUserWithEmailAndPassword(email, pass);
 	promise.catch(e => console.log(e.message));
 	promise.catch(e => alert(e.message));

 	var user = firebase.auth();
 	console.log("uid " + user.currentUser.uid);

 	firebase.database().ref('/Users/' + user.currentUser.uid).set({
 		'email': "blabla",
 		'address': "18440 hatteras st"

 	})
 });

 btnLogout.addEventListener('click', e => {
 	firebase.auth().signOut();

 });

 var user = {}
 var ohShit;

 $("#btnLogin").on("click", function () {
 	ohShit = true;
 });

 $("#btnLogout").on("click", function () {

 	window.location.href = "index.html";
 });
 // Add a realtime Listener

 var searchableIngr = [];

 firebase.auth().onAuthStateChanged(firebaseUser => {

 	if (firebaseUser) {
 		firebase.database().ref('Users/' + firebaseUser.uid + '/ingrArray').on('value', function (snapshot) {
 			console.log("user" + snapshot.val())
 			user = snapshot.val();

 			console.log("I am logged in now");

 			// Disableing login & sign-up button as well as log-in forms when signed-in
 			$("#btnLogin").addClass('hide');
 			$("#btnSignUp").addClass('hide');
 			$("#txtEmail").addClass('hide');
 			$("#txtPassword").addClass('hide');

 			if (ohShit) {
 				window.location.href = "main.html";
 			}

 			// Drag and drop functions

 			$(function () {
 				$(".draggable").draggable({
 					revert: "invalid"
 				});

 				$(".list-item").on("mouseup", function (event) {
 					var text = $(this).text();
 					searchableIngr.push(text);
 					console.log(searchableIngr);
 				});
 				//     var searchableIngr2 = [];
 				$(".droppable-1, .droppable-2").on("drop", function (event) {
 					$(this).append('<p class="list-item">' + searchableIngr[searchableIngr.length - 1] + '</p>');
 					//         var text = $(this).find(".list-item").text();
 					//         searchableIngr2.push(text);
 					//         console.log(searchableIngr2);
 				});
 				$(".droppable-1, .droppable-2").droppable({
 					drop: function (event, ui) {
 						ui.draggable.remove();
 						$(this).height(function (index, height) {
 							return (height + 30);
 						});
 					}
 				});
 			});


 			// enabling logout button when signed-in
 			$("#btnLogout").removeClass('hide');

 			// adding message "Welcome user x" when user is logged-in
 			$("#userName").removeClass('hide');
 		})

 		btnLogout.classList.remove('hide');
 	} else {
 		console.log("not logged in");
 		btnLogout.classList.remove('hide');

 		// Enabling login & sign-up button as well as log-in forms when signed-out
 		$("#btnLogin").removeClass('hide');
 		$("#btnSignUp").removeClass('hide');
 		$("#txtEmail").removeClass('hide');
 		$("#txtPassword").removeClass('hide');

 		// disabling logout button when signed-in
 		$("#btnLogout").addClass('hide');

 		// Disabling message "Welcome user x" when user is logged-in
 		$("#userName").addClass('hide');

 		$(function () {
 			$(".draggable").draggable("disable")
 		})
 	}
 	var uid = firebaseUser.uid;
 	pushedRef = firebase.database().ref('Users/' + uid).set({
 		ingrArray: ["First Item"]
 	})
 })