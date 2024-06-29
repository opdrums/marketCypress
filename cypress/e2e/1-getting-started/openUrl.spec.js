describe('how automation open url', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('click notification', () =>{
        cy.xpath('//button[@id="rcc-confirm-button"]').click()
        cy.xpath('//a[@class="store-locator button"]').click()
    })
})