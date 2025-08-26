describe('Página princial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })
    it('Deve validar que todos os textos estão aparecendo na tela e validar logo em seguida o login após clicar ícone de mensagem', () => {
        cy.get('.initial > img').should('be.visible');
        cy.get('.initial > p').should('be.visible');
        cy.get('.footer > p').should('be.visible');

        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('alexandre@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})
