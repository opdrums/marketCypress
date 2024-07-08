describe('automation validate news', ()=>{
    //pause() para hacer debug por elemento
    //.debug() sobre un elemento

    beforeEach(()=>{
        cy.visit('/')
        let clickAlertAcept =cy.xpath('//button[@id="rcc-confirm-button"]')
        clickAlertAcept.click()
    })
    
    it('validate elements of a list',() =>{
           
        let validateELementText = cy.debug().xpath('//*[@id="__next"]/div/header/div/div/div[2]/div[1]/div/ul/li[3]/a')
        let elementListNo = cy.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div')
        let buttonNews =  cy.contains('NOVEDADES')

        validateELementText.should('have.text','NOVEDADES')
        buttonNews.click()
        elementListNo.should('have.length',0)
    })

    it(('validate element is visible'), ()=>{
        let buttonNews =  cy.contains('NOVEDADES')
        
        buttonNews.should('exist')
        buttonNews.should('not.be.checked')
        buttonNews.should('be.visible')
        cy.get().shadow().should('be.visible')
        cy.log('soy visible')
    })
})