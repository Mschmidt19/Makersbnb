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


}

function signIn(){
  this.username = document.getElementById("username").value;
  this.password = document.getElementById("password").value;

  var usersRef = db.collection('Users');
  var allUsers = usersRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (this.username === doc.data().username) {
            if (this.password === doc.data().password){
              console.log("Yay you have signed in");
              window.location = "index.html"
            } else {
              console.error("Password incorrect.");
            }
          }
          else {
            console.error("username does not exist")
          }
        });
      })
    .catch(err => {
      console.log('Error getting documents', err);
    });
};
      //     };
      //     console.log(doc.data().username);
      //     console.log(doc.data());
      //   });
      // })

// function signOut(){
//   // redirect
// }(
// )
