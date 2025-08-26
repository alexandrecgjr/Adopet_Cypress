describe('Página princial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })
    it('Deve validar que todos os textos estão aparecendo na tela e validar logo em seguida o login após clicar ícone de mensagem', () => {
        cy.get('.initial > img').should('be.visible');
        cy.get('.initial > p').should('be.visible');
        cy.get('.footer > p').should('be.visible');

        cy.get('.header__message').click();
        cy.login('alexandre@email.com', 'Senha123');
    })
})
