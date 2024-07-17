class clickELement{

    clickElementByGet(elm){
        cy.get(elm)
        .should('be.visible')
        .click()
    }

    clickElementListEq(elm, indice){
        cy.get(elm)
        .eq(indice)
        .click({force:true})

    }

    clickElementXpathEq(elm,elmAditional, number){
        cy.xpath(elm).find(elmAditional)
        .eq(number).should('be.visible')
        .click({force:true})
    }

    clickMultipleElements(elm){
        cy.xpath(elm)
        .click({multiple:true})
    }

    clickCheckBox(){
        cy.get('[type="checkbox"]')
        .eq(1)
        .check({force:true})
    }

    clickElementByXPath(elm){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .click()
    }
}

export default clickELement