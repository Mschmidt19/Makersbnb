const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var propertyContainer = document.getElementById("propertyContainer");

db.collection("Listings").onSnapshot(function(querySnapshot) {

    querySnapshot.docChanges().forEach(function(change) {

      if (change.type === "added") {
        addNewListingDiv(change);
      }
      else if (change.type === "removed") {
        removeListingDiv(change);
      }

    });

});

function addNewListingDiv(change) {
  propertyContainer.innerHTML += "<div class='" + change.doc.id + " listing'><div class='innertext'><div class='bold'>" + change.doc.data().title + "</div><br>Price per night: £" + change.doc.data().price + "<br>Contact number: " + change.doc.data().phone_number + "<br><div class='oblique'>" + change.doc.data().description + "</div><br><button onClick='bookProperty(this.id)' id='" + change.doc.id + "'>Book</button></div><div class='innerimage'><img class='image' src='" + change.doc.data().image + "'></div></div>"
}

function removeListingDiv(change) {
  var itemToRemove = document.getElementsByClassName(change.doc.id)[0];
  propertyContainer.removeChild(itemToRemove);
  window.alert("You successfully booked " + change.doc.data().title + "!")
}

function addProperty() {

  var titleText = document.getElementById("propertyTitle").value;
  var pricePerNight = document.getElementById("propertyPricePerNight").value;
  var phoneNumber = document.getElementById("propertyPhoneNumber").value;
  var description = document.getElementById("propertyDescription").value;
  var image = document.getElementById("propertyImage").value;

  db.collection("Listings").doc().set({
      title: titleText,
      price: pricePerNight,
      phone_number: phoneNumber,
      image: image,
      description: description
  })
  .then(function() {
      console.log("Listing successfully added!");
  })
  .catch(function(error) {
      console.error("Error adding listing: ", error);
  });

}

function bookProperty(button_id) {

  db.collection("Listings").doc(button_id).delete().then(function() {
    console.log("You successfully booked a listing!");

  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

}
