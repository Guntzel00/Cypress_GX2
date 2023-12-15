class LoginPage {
	preencherEmail() {
		cy.get('#user').type(Cypress.env('user_email'));
	}

	preencherSenha() {
		cy.get('input[name=password]').type(Cypress.env('user_password'));
	}

	clicarEntrar() {
		cy.get('button[class="btn btn-lg btn-primary"]')
			.should('be.visible')
			.click();
	}
}

class LoginErrado {
	preencherEmailErrado() {
		cy.get('#user').type(Cypress.env('emailErrado@gmail.com'));
	}
}
export { LoginPage, LoginErrado };
