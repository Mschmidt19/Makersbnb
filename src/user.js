const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function createUser(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  this.username = username;
  var exists = null;

  // Does this username already exist in our database? true or false:
  var usersRef = db.collection('Users');
  var allUsers = usersRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (this.username === doc.data().username) {
            exists = true;
          };
        });
        // If username exists, then throw error. If not, then push to database
        if (exists === true) {
          console.error("This username already exists.");
        }
        else {
          db.collection("Users").doc().set({
              username: username,
              password: password
          });
          window.location = "index.html";
        }
      });
};


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
            console.error("Username does not exist.")
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
