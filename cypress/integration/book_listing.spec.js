describe("book a listing", function(){
  it('removes booked property from the page', function(){
    cy.visit('/index_test.html')
      .get('#propertyTitle')
      .type('Taco Man')
      .get('#propertyPricePerNight')
      .type('30')
      .get('#propertyPhoneNumber')
      .type('0000')
      .get('#propertyImage')
      .type('https://i.redd.it/o85436g929g11.jpg')
      .get('#propertyDescription')
      .type("This property is the bee's knees")
    cy.get('#addPropertyButton')
      .click()
    cy.contains('Book')
      .click()
  });
});
