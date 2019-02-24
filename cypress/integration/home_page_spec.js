describe('The home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('Hi people');
    cy.contains('Go to page 2').click();
    cy.url().should('include', '/page-2');
    cy.contains('Hi from the second page');
  });
});
