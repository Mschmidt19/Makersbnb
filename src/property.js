const firestore = firebase.firestore();
const settings = {/*your settings...*/ timestampsInSnapshots: true};
firestore.settings(settings);

var property = new Property();

function Property (database = firestore) {
  this.database = database
}

var propertyContainer = document.getElementById('propertyContainer');
var propertyTitle;
var propertyPrice;
var propertyPhoneNumber;
var propertyDescription;
var propertyImage;
var titleBeingBooked;

property.database.collection("Listings").onSnapshot(function(querySnapshot) {

    querySnapshot.docChanges().forEach(function(change) {

      if (change.type === "added") {
        property.addNewListingDiv(change);
      }
      else if (change.type === "removed") {
        property.removeListingDiv(change);
      }

    });

});


Property.prototype.addNewListingDiv = function (change) {
  propertyContainer.innerHTML += "<div class='" + change.doc.id + " listing'><div class='innertext'><div class='bold'>" + change.doc.data().title + "</div><br>Price per night: £" + change.doc.data().price + "<br>Contact number: " + change.doc.data().phone_number + "<br><div class='oblique'>" + change.doc.data().description + "</div><br><button onClick='property.bookProperty(this.id)' id='" + change.doc.id + "'>Book</button></div><div class='innerimage'><img class='image' src='" + change.doc.data().image + "'></div></div>"
};

Property.prototype.removeListingDiv = function (change) {
  titleBeingBooked = change.doc.data().title;
  itemToRemove = document.getElementsByClassName(change.doc.id)[0];
  propertyContainer.removeChild(itemToRemove);
};

Property.prototype.updateListingVariables = function () {
  propertyTitle = document.getElementById("propertyTitle").value;
  propertyPrice = document.getElementById("propertyPricePerNight").value;
  propertyPhoneNumber = document.getElementById("propertyPhoneNumber").value;
  propertyDescription = document.getElementById("propertyDescription").value;
  propertyImage = document.getElementById("propertyImage").value;
};

Property.prototype.addProperty = function (title = propertyTitle, price = propertyPrice, phoneNumber = propertyPhoneNumber, description = propertyDescription, image = propertyImage) {

  this.database.collection("Listings").doc().set({
      title: title,
      price: price,
      phone_number: phoneNumber,
      description: propertyDescription,
      image: propertyImage
  })
  .then(function() {
      console.log("Listing successfully added!");
  })
  .catch(function(error) {
      console.error("Error adding listing: ", error);
  });

};

Property.prototype.bookProperty = function (button_id) {

  this.database.collection("Listings").doc(button_id).delete().then(function() {
    window.alert("You successfully booked " + titleBeingBooked + "!")
    console.log("You successfully booked a listing!");

  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

};

Property.prototype.sayHello = function () {
  return "hello";
};
