describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the hero title text', () => {
    cy.get('h1').contains('Senior UI, UX & Frontend Developer');
  });
});
