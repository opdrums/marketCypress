describe('automation test', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('validate title', ()=>{
        cy.wait(2000)
        cy.title().should('include', 'Desarrollo')
    })
})