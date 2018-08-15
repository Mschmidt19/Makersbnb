describe("add a listing", function(){
  it('fils in fields', function(){
    cy.visit('/index.html')
      .get('#listingTitle')
      .type('Chimichanga man')
      .get('#listingPhoneNumber')
      .type('0000')
    cy.get('#submitButton')
      .click()
    cy.contains('Chimichanga man')
    cy.contains('0000')
  });
});
