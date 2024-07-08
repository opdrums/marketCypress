describe('test login', ()=>{

    beforeEach(function() {
        // Cargar las credenciales desde el archivo 'credencial.json' dentro del fixture
        cy.fixture('login').then(credentials => {
          this.credentials = credentials; // Asignar las credenciales al contexto 'this'
        });

        cy.visit('https://www.pibox.app/login');
    });

    it('login',function(){
        cy.contains('Aceptar').click()
        cy.get(this.credentials.algo).type(this.credentials.email)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(this.credentials.password)
        cy.get('.jss12 > .MuiButton-contained > .MuiButton-label')
        .should('be.visible').click()
        
        cy.getCookies().should('have.length', 14).then((cookies) =>{
            expect(cookies[0]).to.have.property('name', '_gat_gtag_UA_175920735_1')
        })

        cy.getCookie('_gat_gtag_UA_175920735_1').should('exist')
        cy.clearCookie('_gat_gtag_UA_175920735_1').should('not.exist')
        //cy.clearAllCookies()
        cy.getCookies().should('have.length', 13)
        cy.setCookie("opcookie",'something')
        cy.getCookie('opcookie').should('have.property', 'value', 'something')
    })
})