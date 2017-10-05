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
        console.log("uid "+ user.currentUser.uid);

        firebase.database().ref('/Users/' + user.currentUser.uid).set({
        'email': "blabla",
        'address': "18440 hatteras st"




        //  firebase.database.ref('/Users/' +firebase.auth().currentUser.uid).set({
        // 'email': email,
        // 'address': "18440 hatteras st"

 })});

 btnLogout.addEventListener('click', e => {
     firebase.auth().signOut();

 });

 // Add a realtime Listener

 firebase.auth().onAuthStateChanged(firebaseUser => {

     if (firebaseUser) {
         console.log(firebaseUser.uid);
         btnLogout.classList.remove('hide');
     } else {
         console.log("not logged in");
         btnLogout.classList.remove('hide');

     }

       pushedRef = firebase.database().ref().push({
                 uid: firebaseUser.uid 
             })
              

 })


// var email = txtEmail.val();
//     var pass = txtPassword.val();
//     var auth = firebase.auth();

//     window.email = email;

//     // sing up
//    auth.createUserWithEmailAndPassword(email, pass).then(function(user){
//      // create a new Node

//     database.ref('/Users/' + user.uid).set({
//         'email': email,
//         'address': "18440 hatteras st"
//     })
//    });

              

 // var user = firebase.auth().currentUser;
 // setTimeout(function() {
 //     var user = firebase.auth();
 //     console.log(user.currentUser)
 //     if (user) {
 //         uid = user.uid;
 //         console.log(uid);
 //         user.providerData.forEach(function(provider) {
 //             providerUid = provider.uid;
 //             email = provider.email;
 //             console.log(providerUid);
 //             console.log(email);
 //         });
 //     }
 // }, 1000)