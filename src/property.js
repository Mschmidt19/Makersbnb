const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

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

        propertyContainer.innerHTML += "<div class='listing'><div class='innertext'><div class='bold'>" + change.doc.data().title + "</div><br>Price per night: £" + change.doc.data().price + "<br>Contact number: " + change.doc.data().phone_number + "<br><div class='oblique'>" + change.doc.data().description + "</div></div><div class='innerimage'><img class='image' src=" + change.doc.data().image + "></div></div>"

      }

    });

});
