const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function createUser(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  db.collection("Users").doc().set({
      username: username,
      password: password
  })

  this.username = username;

  // redirect to logged-in homepage

}

function signIn(){
  var usersRef = db.collection('Users');
  var allUsers = usersRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data().username);
          console.log(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });


  // // want to check with collection "Users" on firebase
  // var username = document.getElementById("username").value;
  // var password = document.getElementById("password").value;
  //
  // if (username === db.collection("Users").doc('dKJswfv3b3xj7SqWXLXB').username) {
  //   console.log("Whee, username matches")};

  // give error if username =/= password, redirect if username=password

};
// function signOut(){
//   // redirect
// }(
// )
