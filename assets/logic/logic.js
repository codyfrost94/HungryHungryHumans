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

     var user = firebase.auth();
     console.log("uid " + user.currentUser.uid);

     firebase.database().ref('/Users/' + user.currentUser.uid).set({
         'email': "blabla",
         'address': "18440 hatteras st"




         //  firebase.database.ref('/Users/' +firebase.auth().currentUser.uid).set({
         // 'email': email,
         // 'address': "18440 hatteras st"

     })
 });

 btnLogout.addEventListener('click', e => {
     firebase.auth().signOut();

 });

 var user = {}
 // Add a realtime Listener

 firebase.auth().onAuthStateChanged(firebaseUser => {

     if (firebaseUser) {
         firebase.database().ref('Users/' + firebaseUser.uid + '/ingrArray').on('value', function(snapshot) {
             console.log(snapshot.val())
             user = snapshot.val();

             console.log("I am logged in now");

             btnLogout.classList.remove('hide');


             $(function() {
                 $(".draggable").draggable({
                     grid: [10, 10],
                     revert: "invalid"
                 });
                 $(".droppable").droppable({
                     drop: function(event, ui) {
                         $(this).height(function(index, height) {
                             return (height + 40);
                         });
                         //          .addClass( "ui-state-highlight" )
                         //          .find( "p" )
                         //            .html( "Dropped!" );
                       }
                    });
                  });

})



         btnLogout.classList.remove('hide');
     } else {
         console.log("not logged in");
         btnLogout.classList.remove('hide');


         $(function() {
                 $(".draggable").draggable( "disable")
                     
                         //          .addClass( "ui-state-highlight" )
                         //          .find( "p" )
                         //            .html( "Dropped!" );
                       })
              
     }
     var uid = firebaseUser.uid;
     pushedRef = firebase.database().ref('Users/' + uid).set({
         ingrArray: ["First Item"]

     })


 })
