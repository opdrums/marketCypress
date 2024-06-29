describe('automation validate news', ()=>{

    let buttonNews =  cy.contains('NOVEDADES')
    let clickAlertAcept =cy.xpath('//button[@id="rcc-confirm-button"]')
    let validateELementText = cy.xpath('//*[@id="__next"]/div/header/div/div/div[2]/div[1]/div/ul/li[3]/a')
    let elementListNo = cy.xpath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div')

    beforeEach(()=>{
        cy.visit('/')
        clickAlertAcept.click()
    })
    
    it('validate elements of a list',() =>{
        validateELementText.should('have.text','NOVEDADES')
        buttonNews.click()
        elementListNo.should('have.length',7)
    })

    it(('validate element is visible'), ()=>{
        buttonNews.should('be.visible')
        buttonNews.click()
    })
})