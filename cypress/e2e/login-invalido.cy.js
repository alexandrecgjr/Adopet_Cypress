describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })
it('Deve preencher os campos de login de forma inválida e exibir mensagem ao usuário', () => {
    cy.get('[data-test="input-loginEmail"]').type('alexandre@email.com');
    cy.get('[data-test="input-loginPassword"]').type('.');
    cy.get('[data-test="submit-button"]').click();
    cy.get('.error');
})
})
