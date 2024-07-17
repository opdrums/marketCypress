class visibleBase{
    validateElmExist(elm){
        cy.get(elm).should('exist')
    }

    visibleElmPage(elm){
        cy.get(elm)
        .should('be.visible')
        .click()
    }

    dismissAlertIfPresent(elm){
        cy.get(elm).should('be.visible')
        cy.get('body').type('{esc}');
        cy.get(elm).should('not.be.visible');
    }
}

export default visibleBase