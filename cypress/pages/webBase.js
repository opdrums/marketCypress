class webBase {

    openUrl(url){
        cy.visit(url)
    }

    fielText(elm, text){
        cy.xpath(elm).clear().type(text)

    }

    screenshot(){
        cy.screenshot()
    }

    elementVisibleClick(elm){
        cy.xpath(elm).should('be.visible').click()
    }

    getElementClick(elm){
        cy.get(elm).should('exist').click()
    }

    containsElmClick(elm){
        cy.contains(elm).should('exist').click()
    }

    containsAlertText(text){
        cy.contains(text).should('have.text', text)
    }

    waitExplicity(){
        cy.wait(1000)
    }
}

export default webBase