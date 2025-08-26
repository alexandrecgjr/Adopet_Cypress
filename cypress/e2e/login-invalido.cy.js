describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos de login de forma inválida e exibir mensagem ao usuário', () => {
        
        cy.loginErrado('test3', '123');
        
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
         
    })
})
