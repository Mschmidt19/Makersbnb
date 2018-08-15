const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function addProperty() {

  var titleText = document.getElementById("propertyTitle").value;
  var phoneNumber = document.getElementById("propertyPhoneNumber").value;
  var description = document.getElementById("propertyDescription").value;
  var image = document.getElementById("propertyImage").value;


  db.collection("Listings").doc().set({
      title: titleText,
      phone_number: phoneNumber,
      image: image,
      description: description
  })
  .then(function() {
      console.log("Listing successfully written!");
  })
  .catch(function(error) {
      console.error("Error adding listing: ", error);
  });

}

var propertyContainer = document.getElementById("propertyContainer");

db.collection("Listings").onSnapshot(function(querySnapshot) {

    querySnapshot.docChanges().forEach(function(change) {

      if(change.type === "added") {

        propertyContainer.innerHTML += "<div class='listing'><div class='innertext'>" + change.doc.data().title + "<br>Contact number: " + change.doc.data().phone_number + "<br>" + change.doc.data().description + "</div><div class='innerimage'><img class='image' src=" + change.doc.data().image + "></div></div>"

      }

    });

});
