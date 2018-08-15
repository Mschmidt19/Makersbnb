describe("list a property", function(){
  it("lists and sees property", function(){
    cy.visit('/index.html');
    cy.contains('Waka flocka');
  })
})