// Initialize Firebase
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

 });

 // Add signup event

 btnSignUp.addEventListener('click', e => {

     // TODO: Check for real emailsz

     const email = txtEmail.value;
     const pass = txtPassword.value;
     const auth = firebase.auth();

     // Sign in
     const promise = auth.createUserWithEmailAndPassword(email, pass);
     promise
         .catch(e => console.log(e.message));

 });

 btnLogout.addEventListener('click', e => {
     firebase.auth().signOut();

 });

 // Add a realtime Listener

 firebase.auth().onAuthStateChanged(firebaseUser => {

     if (firebaseUser) {
         console.log(firebaseUser);
         btnLogout.classList.remove('hide');
     } else {
         console.log("not logged in");
         btnLogout.classList.remove('hide');

     }
 })