describe("add a listing", function(){
  it('adds a property to the listings list', function(){
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
    cy.contains('Taco Man')
    cy.contains('Price per night: £30')
    cy.contains("This property is the bee's knees")
    cy.contains('0000')
    cy.get("#propertyContainer")
      .get('.image')
      .should('have.attr', 'src').and('include', 'https://i.redd.it/o85436g929g11.jpg')
  });
});
