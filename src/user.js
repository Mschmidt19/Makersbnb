const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function createUser(){

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  db.collection("Users").doc().set({
      username: username,
      email: email,
      password: password
  })

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  }).then(function(userRecord) {
    // This prints a message letting us know that user has been created, with a uid.
    console.log("Successfully created new user")
  })
  .catch(function(error){
    console.log("Error creating new user:", error);
  });
}





// firebase.auth().onAuthStateChanged(firebaseUser => { });

//
// // Create signIn function
// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
//   var errorCode = error.code;
//   var errorMessage = error.message;
// })
//
// // Create signOut function
// firebase.auth().signOut().then(function(){
//   // signOut successful.
// }).catch(function(error){
//   // An error happened.
// });
