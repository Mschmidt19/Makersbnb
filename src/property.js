const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function addProperty() {

  var titleText = document.getElementById("propertyTitle").value;
  var phoneNumber = document.getElementById("propertyPhoneNumber").value;
  var description = document.getElementById("propertyDescription").value;

  // Add a new document in collection "cities"
  db.collection("Listings").doc().set({
      title: titleText,
      phone_number: phoneNumber,
      description: description
  })
  .then(function() {
      console.log("Listing successfully written!");
  })
  .catch(function(error) {
      console.error("Error adding listing: ", error);
  });

}

var propertContainer = document.getElementById("propertyContainer");

db.collection("Listings").onSnapshot(function(querySnapshot) {

    querySnapshot.docChanges().forEach(function(change) {

      if(change.type === "added") {

        list_div.innerHTML += "<div class='list-item'><h3>" + change.doc.data().title + "</h3><p>Phone Number: " + change.doc.data().phone_number + "</p></div>"

      }

    });

});
