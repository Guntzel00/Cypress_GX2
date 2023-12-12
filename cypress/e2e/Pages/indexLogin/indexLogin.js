
class LoginPage{

    preencherEmail(){
        cy.get('#user').type(Cypress.env('user_email'))

    }

    preencherSenha(){
        cy.get('input[name=password]').type(Cypress.env('user_password'))

    }

    clicarEntrar(){
        
        cy.get('button[class="btn btn-lg btn-primary"]')
            .should('be.visible').click()
    }

} export default new LoginPage;