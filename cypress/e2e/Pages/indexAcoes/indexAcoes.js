class Acoes {
	preencherCampoProspostoPor() {
		// Seleciona o campo 'Proposto' por e passa um alias
		cy.get(
			'input[role="combobox"][placeholder="Selecione"][aria-required="true"][type="combo"]'
		)
			.eq(0)
			.as('inputPropostoPor');

		//Aguarda a requisição ser concluída para prosseguir
		cy.intercept(
			'GET',
			'https://dev-gateway.aperam.com/saia/tags?undefined'
		).as('suaRequisicao');
		cy.get('@inputPropostoPor').click();
		cy.wait('@suaRequisicao');

		// Seleciona o campo 'Proposto por', escolhendo o primeiro nome da lista
		cy.get(
			'[view_id="$suggest10"] > .webix_win_content > .webix_win_body > .webix_view > .webix_scroll_cont > [webix_l_id]:first-child'
		).click();
	}

	preencherCampoNatureza() {
		//Seleciona o campo 'Natureza' e escolhe a primeira opção da lista
		cy.get('div.webix_el_box > select[aria-required="true"]')
			.should('be.visible')
			.children('option')
			.eq(1)
			.then((option) => {
				cy.get('div.webix_el_box > select[aria-required="true"]').select(
					option.val()
				);
			});
	}

	preencherCampoGerencia() {
		// Seleciona o campo 'Gerência' e escolhe a primeira opção da lista
		cy.get('[view_id="comboIdManagement"] > .webix_el_box > .webix_input_icon')
			.should('be.visible')
			.click();
		cy.get(
			'[view_id="$suggest7"] > .webix_win_content > .webix_win_body > .webix_view > .webix_scroll_cont > [webix_l_id]:first-child'
		)
			.should('be.visible')
			.click();
	}

	preencherCampoResponsavelPelaGerencia() {
		//Seleciona o campo 'Responsável pela gerência' e seleciona o primeiro nome da lista
		cy.get('[view_id="comboIdResponsible"] > .webix_el_box > .webix_input_icon')
			.should('be.visible')
			.click();
		cy.get(
			'[view_id="$suggest8"] > .webix_win_content > .webix_win_body > .webix_view > .webix_scroll_cont > [webix_l_id]:first-child'
		)
			.should('be.visible')
			.click();
	}

	preencherCampoTagParaAcao() {
		//Seleciona o campo 'Tag para ação', seleciona as duas primeiras tags e fecha a seleção de tags
		cy.get('input[aria-label="TAG para ação"]').should('be.visible').click();
		cy.get(
			'.webix_layout_line > .webix_view > .webix_scroll_cont > [webix_l_id]:nth-child(2)'
		)
			.should('be.visible')
			.click();
		cy.get(
			'.webix_layout_line > .webix_view > .webix_scroll_cont > [webix_l_id]:nth-child(1)'
		)
			.should('be.visible')
			.click();
		cy.get('input[aria-label="TAG para ação"]').should('be.visible').click();
	}

	preencherCampoDescricaoDoProblema() {
		//Seleciona o campo 'Descrição do Problema' e passa uma descrição genérica para o campo
		cy.get('div.webix_el_box textarea.webix_inp_textarea[aria-required="true"]')
			.first()
			.should('be.visible')
			.type('Descrição genérica de problema para realizar testes E2E');
	}

	preencherCampoListaDeAcoes() {
		//Seleciona o campo 'Lista de Ações (Ação Melhoria)' e passa uma descrição genérica para o campo
		cy.get('div.webix_el_box textarea.webix_inp_textarea[aria-required="true"]')
			.last()
			.should('be.visible')
			.type('Descrição genérica de lista de ações para realizar teste E2E');
	}

	submitFormularioDeNovaAcao() {
		//Clica no butão de envio para realizar o envio da nova ação
		cy.get('button').contains('Criar Ação').should('be.visible').click();
	}

	verificaMensagemDeAcaoCriadaComSucesso() {
		//Verifica a mensagem de retorno para o usuário e clica no
		cy.get('.webix_popup_text > span')
			.should('be.visible')
			.invoke('text')
			.should('include', 'Proposta')
			.and('include', 'Successfully Created');
		cy.get('.webix_popup_button > div')
			.contains('OK')
			.should('be.visible')
			.click();
	}
}

export default Acoes;
