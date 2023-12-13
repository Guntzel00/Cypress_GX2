import login from '../e2e/Pages/indexLogin/indexLogin';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
	cy.visit('/');
	login.preencherEmail();
	login.preencherSenha();
	login.clicarEntrar();
});
Cypress.Commands.add('FecharIframeDeBoasVindas', () => {
	cy.get('iframe').should('be.visible');

	cy.get('iframe[src="/blank/application/tables/select-default-settings"]').as(
		'WelcomeIframe'
	);
	cy.frameLoaded('@WelcomeIframe');
	cy.wait(7000); // Aguardar o carregamento do iframe

	cy.get('@WelcomeIframe').then(($iframe) => {
		cy.frameLoaded('@WelcomeIframe');
		const body = $iframe.contents().find('body');
		cy.wrap(body)
			.find('button>span[class="webix_icon fa fa-close"]')
			.should('be.visible')
			.click();
	});
});
Cypress.Commands.add('selecionaPlanta', () => {
	cy.iframe('iframe').should('be.visible');

	//seleciona a Plant
	cy.iframe()
		.find('select[aria-required="true"]')
		.eq(0)
		.invoke('removeAttr', 'disabled')
		.select('10');
	cy.iframe().find('select[aria-required="true"]').eq(1).select('pt-BR');
	cy.iframe().find('button[type="button"]').click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
