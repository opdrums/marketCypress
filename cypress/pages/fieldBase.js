class fieldBase {
    
    fillTextFieldGet(elm, text){
        cy.get(elm)
        .clear()
        .type(text)
    }

    fillTextFieldByXPath(elm, text){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .type(text)
    }
}

export default fieldBase