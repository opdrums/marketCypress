describe('send form suggestion',()=>{

    beforeEach(function() {
        cy.visit('https://contacto.miexperienciastarbucks.com.co/');

        cy.fixture('credencial').then(credentials => {
          this.credentials = credentials;
        });
      });
      
    it.only('send form suggestion stark', function() {
        cy.xpath("//input[@placeholder='Numero Documento de Consumo']").clear().type(this.credentials.numberDocument);
    });
      
    
    it('select element dropdown', () =>{
        cy.get(':nth-child(11) > .form-control')
        .should('be.visible')
        .select(1)
    })
    
    it('check element show', () =>{
        cy.xpath("//input[@placeholder='Numero Documento de Consumo']")
        .invoke('show')
        .should('be.visible')
    })

    it('validate table dinamic', function(){
        /*cy.contains('etiqueta', 'facebook')
        .prev()
        .find('input')
        .check()*/
    })

})
