describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('[data-test="register-button"]').click();
  })
  it('Deve preencher os campos do formulário corretamente para poder cadastrar o usuário', () => {

    cy.cadastrar('alexandre Carlos', 'alexandre@email.com', 'Senha123');

  })
})