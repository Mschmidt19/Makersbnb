describe("add a listing", function(){
  it('fills in fields', function(){
    cy.visit('/index_test.html')
      .get('#propertyTitle')
      .type('Taco Man')
      .get('#propertyPhoneNumber')
      .type('0000')
      .get('#propertyImage')
      .type('https://i.redd.it/o85436g929g11.jpg')
      .get('#propertyDescription')
      .type("This property is the bee's knees")
    cy.get('#addPropertyButton')
      .click()
    cy.get("#propertyContainer")
    cy.get('button')
      .click()
  });
});
