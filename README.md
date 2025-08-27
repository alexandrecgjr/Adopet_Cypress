# 🐕 Adopet - Testes Automatizados com Cypress

Este projeto contém testes automatizados para a aplicação Adopet, desenvolvidos utilizando Cypress para garantir a qualidade e funcionalidade da plataforma de adoção de pets.

## 🎯 Sobre o Projeto

O Adopet é uma plataforma web de testes para adoção de animais de estimação. Este projeto de testes automatizados garante que todas as funcionalidades críticas da aplicação estejam funcionando corretamente, incluindo:

- Autenticação de usuários
- Cadastro de novos usuários
- Validações de formulários
- Navegação entre páginas
- Testes de API

## 🧪 Funcionalidades Testadas

### ✅ Testes de Autenticação
- **Login Correto**: Validação de login com credenciais válidas
- **Login Inválido**: Teste de login com credenciais incorretas
- **Validações de Formulário**: Verificação de mensagens de erro

### ✅ Testes de Cadastro
- **Cadastro Correto**: Registro de usuário com dados válidos
- **Cadastro Inválido**: Teste de cadastro com dados inválidos
- **Cadastro em Massa**: Teste com múltiplos usuários

### ✅ Testes de Interface
- **Tela Principal**: Verificação da página inicial
- **Navegação**: Teste de fluxo entre páginas

### ✅ Testes de API
- **Mensagens**: Validação de endpoints de comunicação

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end
- **Mochawesome**: Gerador de relatórios HTML
- **JavaScript**: Linguagem de programação
- **Node.js**: Runtime JavaScript

## 📋 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## ⚙️ Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd Adopet_Cypress
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

## 🚀 Como Executar os Testes

### Executar todos os testes
```bash
npx cypress run
```

### Executar testes em modo interativo
```bash
npx cypress open
```

### Executar testes específicos
```bash
# Teste de login
npx cypress run --spec "cypress/e2e/login-correto.cy.js"

# Teste de cadastro
npx cypress run --spec "cypress/e2e/cadastro-correto.cy.js"
```

## 📁 Estrutura do Projeto

```
Adopet_Cypress/
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   ├── api-mensagens.cy.js
│   │   ├── cadastro-correto.cy.js
│   │   ├── cadastro-invalido.cy.js
│   │   ├── cadastro-massa.cy.js
│   │   ├── login-correto.cy.js
│   │   ├── login-invalido.cy.js
│   │   └── tela-principal.cy.js
│   ├── fixtures/               # Dados de teste
│   │   ├── example.json
│   │   └── usuarios.json
│   ├── support/                # Configurações e comandos
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── screenshots/            # Screenshots dos testes
│   ├── videos/                 # Gravações dos testes
│   └── results/                # Relatórios gerados
├── cypress.config.js           # Configuração do Cypress
├── package.json                # Dependências do projeto
└── README.md                   # Este arquivo
```

## 🔧 Comandos Customizados

O projeto inclui comandos customizados para facilitar os testes:

### `cy.login(email, senha)`
Realiza login com as credenciais fornecidas.

### `cy.loginErrado(email, senha)`
Testa login com credenciais inválidas.

### `cy.cadastrar(nome, email, senha)`
Realiza cadastro de novo usuário.

**Exemplo de uso:**
```javascript
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
    cy.login('usuario@email.com', 'senha123');
  });
});
```

## 📊 Relatórios

Os testes geram relatórios HTML usando Mochawesome, que são salvos em:
- **Diretório**: `cypress/results/`
- **Formato**: HTML com timestamp
- **Configuração**: Relatórios não sobrescrevem arquivos existentes

### Acessar relatórios
Após executar os testes, os relatórios estarão disponíveis em:
```
cypress/results/mochawesome.html
```

## 🔗 Links Úteis

- [Documentação do Cypress](https://docs.cypress.io/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Site da Aplicação Adopet](https://adopet-frontend-cypress.vercel.app)

## 👥 Autor

- **Alexandre C**