describe('how automation open url', ()=>{

    let dataBase;

    beforeEach(function() {
        cy.fixture('login').then(credentials => {
            dataBase = credentials;
            cy.openUrl(dataBase.url)
        });
    });

    
    it('validate title url', function(){
        cy.contains(dataBase.title).should('have.text', dataBase.title)
    })
})
