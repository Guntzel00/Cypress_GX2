import login from '../../Pages/indexLogin/indexLogin';

describe('Acessar o Front Just Report', () => {
	context('Context', () => {
		// code here

		beforeEach(() => {
			cy.visit('/');
		});
		it('Login com Sucesso', () => {
			login.preencherEmail();
			login.preencherSenha();
			login.clicarEntrar();

			cy.iframe('iframe').should('be.visible');

			//seleciona a Plant
			cy.iframe()
				.find('select[aria-required="true"]')
				.eq(0)
				.invoke('removeAttr', 'disabled')
				.select('10');
			cy.iframe().find('select[aria-required="true"]').eq(1).select('pt-BR');
			cy.iframe().find('button[type="button"]').click();
			cy.get('iframe').should('be.visible');

			cy.get(
				'iframe[src="/blank/application/tables/select-default-settings"]'
			).as('WelcomeIframe');
			cy.frameLoaded('@WelcomeIframe');
			cy.wait(7000); // Aguardar o carregamento do iframe

			cy.get('@WelcomeIframe').then(($iframe) => {
				cy.frameLoaded('@WelcomeIframe');
				const body = $iframe.contents().find('body');
				cy.wrap(body)
					.find('button>span[class="webix_icon fa fa-close"]')
					.click();
			});

			cy.get('.collapse-menu > .fa').should('be.visible').click();
		});
	});
});
