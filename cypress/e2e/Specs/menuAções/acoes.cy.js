describe('Acessar o Menu Ações', () => {
	beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
	});

	it('Criar Ações com sucesso', () => {
		const getIframeDocument = () => {
			return cy.get('iframe').its('0.contentDocument').should('exist');
		};
		const getInFrameBody = () => {
			// get the document
			return (
				getIframeDocument()
					// automatically retries until body is loaded
					.its('body')
					.should('not.be.undefined')
					// wraps "body" DOM element to allow
					// chaining more Cypress commands, like ".find(...)"
					.then(cy.wrap)
			);
		};

		// Abre o menu lateral
		getInFrameBody().find('.collapse-menu').should('be.visible').click();

		// Clica no sub-menu de ações
		getInFrameBody()
			.contains('span.text.ng-tns-c2066616996-0', 'Ações')
			.should('be.visible')
			.click();

		// Clica em criar ação
		getInFrameBody()
			.contains('span.text.ng-tns-c2066616996-2', 'Criar Ações')
			.should('be.visible')
			.click();

		// Selecionar o elemento <select> com base no atributo aria-required
		cy.wait(3000);
		getInFrameBody()
			.get('select[aria-required="true"]')
			.select('Ação Preventiva');

		// getInFrameBody()
		// 	.find('select[aria-required="true"]')
		// 	.eq(1)
		// 	.select('Pa')
		// 	.select('Ação Preventiva');

		// Mudando o foco para outro iFrame

		// const cadastroNovaAcaoIframe = () => {
		// 	return cy.get('iframe').its('0.contentDocument').should('exist');
		// };
		// const cadastroNovaAcaoIframeBody = () => {
		// 	// get the document
		// 	return (
		// 		cadastroNovaAcaoIframe()
		// 			// automatically retries until body is loaded
		// 			.its('body')
		// 			.should('not.be.undefined')
		// 			// wraps "body" DOM element to allow
		// 			// chaining more Cypress commands, like ".find(...)"
		// 			.then(cy.wrap)
		// 	);
		// };
	});
});
