import login from '../../Pages/indexLogin/indexLogin'

describe('Acessar o Menu Ações', () => {
   beforeEach(() => {
    cy.visit('https://dev-geon.aperam.com/app/blank/application/actions');
    login.preencherEmail()
    login.preencherSenha()
    login.clicarEntrar()

    
    
   })
   it('Criar Ações com sucesso', () => {
       // code here
   })
})