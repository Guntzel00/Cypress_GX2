describe('Acessar o Front Just Report', () => {
	context('Context', () => {
		// code here

		beforeEach(() => {
			cy.visit('/');
		});
		it('Login com Sucesso', () => {
			// Realiza o Login
			cy.login();
			//seleciona a Planta
			cy.selecionaPlanta();
			//Fecha o iFrame de Boas vindas
			cy.FecharIframeDeBoasVindas();
		});
	});
});
