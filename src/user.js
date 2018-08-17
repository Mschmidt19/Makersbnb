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
        window.alert(`The username ${this.username} already exists`);
      }
      else {
        db.collection("Users").doc().set({
            username: username,
            password: password
        });
        window.alert(`Created a new account with name ${this.username}, to sign in go back to homepage`);
      }
    });
};

function signUp() {
  window.location = "createUser.html";
}

function redirectToNotSignedIn() {
  window.location = "NotSignedInHome.html";
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
              window.location = "SignedInHome.html"
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
