import Acoes from '../../Pages/indexAcoes/indexAcoes';

const acoes = new Acoes();

describe('Acessar o Menu Ações', () => {
	beforeEach(() => {
		cy.login();
		cy.selecionaPlanta();
		cy.FecharIframeDeBoasVindas();
	});

	// it('Navegar para o menu de ações', () => {
	// 	const getIframeDocument = () => {
	// 		return cy.get('iframe').its('0.contentDocument').should('exist');
	// 	};
	// 	const getInFrameBody = () => {
	// 		// get the document
	// 		return (
	// 			getIframeDocument()
	// 				// automatically retries until body is loaded
	// 				.its('body')
	// 				.should('not.be.undefined')
	// 				// wraps "body" DOM element to allow
	// 				// chaining more Cypress commands, like ".find(...)"
	// 				.then(cy.wrap)
	// 		);
	// 	};

	// 	// Abre o menu lateral
	// 	getInFrameBody().find('.collapse-menu').should('be.visible').click();

	// 	// Clica no sub-menu de ações
	// 	getInFrameBody()
	// 		.contains('span.text.ng-tns-c2066616996-0', 'Ações')
	// 		.should('be.visible')
	// 		.click();

	// 	// Clica em criar ação
	// 	getInFrameBody()
	// 		.contains('span.text.ng-tns-c2066616996-2', 'Criar Ações')
	// 		.should('be.visible')
	// 		.click();

	// 	// Selecionar o elemento <select> com base no atributo aria-required
	// 	// getInFrameBody()
	// 	// 	.get('select[aria-required="true"]')
	// 	// 	.select('Ação Preventiva');

	// 	// getInFrameBody()
	// 	// 	.find('select[aria-required="true"]')
	// 	// 	.eq(1)
	// 	// 	.select('Pa')
	// 	// 	.select('Ação Preventiva');

	// 	// Mudando o foco para outro iFrame

	// 	// const cadastroNovaAcaoIframe = () => {
	// 	// 	return cy.get('iframe').its('0.contentDocument').should('exist');
	// 	// };
	// 	// const cadastroNovaAcaoIframeBody = () => {
	// 	// 	// get the document
	// 	// 	return (
	// 	// 		cadastroNovaAcaoIframe()
	// 	// 			// automatically retries until body is loaded
	// 	// 			.its('body')
	// 	// 			.should('not.be.undefined')
	// 	// 			// wraps "body" DOM element to allow
	// 	// 			// chaining more Cypress commands, like ".find(...)"
	// 	// 			.then(cy.wrap)
	// 	// 	);
	// 	// };
	// });

	it('Criar ações com sucesso', () => {
		//URL do acesso ao iFrame da página de criação de ações
		cy.visit('https://dev-geon.aperam.com/app/blank/application/actions');

		// Seleciona o campo 'Proposto por', escolhendo o primeiro nome da lista
		acoes.preencherCampoProspostoPor();

		//Seleciona o campo 'Natureza' e escolhe a primeira opção da lista
		acoes.preencherCampoNatureza();

		// Seleciona o campo 'Gerência' e escolhe a primeira opção da lista
		acoes.preencherCampoGerencia();

		//Seleciona o campo 'Responsável pela gerência' e seleciona o primeiro nome da lista
		acoes.preencherCampoResponsavelPelaGerencia();

		//Seleciona o campo 'Tag para ação', seleciona as duas primeiras tags e fecha a seleção de tags
		acoes.preencherCampoTagParaAcao();

		//Seleciona o campo 'Descrição do Problema' e passa uma descrição genérica para o campo
		acoes.preencherCampoDescricaoDoProblema();

		//Seleciona o campo 'Lista de Ações (Ação Melhoria)' e passa uma descrição genérica para o campo
		acoes.preencherCampoListaDeAcoes();

		//Clica no butão de envio para realizar o envio da nova ação
		acoes.submitFormularioDeNovaAcao();

		//Verifica a mensagem de retorno para o usuário e clica no
		acoes.verificaMensagemDeAcaoCriadaComSucesso();
	});
});
