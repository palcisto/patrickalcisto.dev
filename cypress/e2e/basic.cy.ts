describe('home page content', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the hero title text', () => {
    cy.get('h1').contains('hello');
  });

  it('displays the short bio text', () => {
    cy.contains('I\'m Patrick');
    cy.contains('A UI Developer');
    cy.contains('A mountain biker');
    cy.contains('A dad to three rad dogs');
  });
});
