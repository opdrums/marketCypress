class containsBase{

    containsExistClick(elm){
        cy.contains(elm)
        .should('be.visible')
        .click()
    }

    containsHaveText(text){
        cy.contains(text)
        .should('have.text', text)
    }

    validateElementLength(elm, numberList){
        cy.get(elm)
        .should("have.length", numberList)
        .wait(2000)
    }
}

export default containsBase