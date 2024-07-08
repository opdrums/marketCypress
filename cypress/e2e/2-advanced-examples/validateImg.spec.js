

beforeEach(()=>{
  cy.visit('/')
  let clickAlertAcept =cy.xpath('//button[@id="rcc-confirm-button"]')
  clickAlertAcept.click()
})

it.only('validate change view tag or invoke', () => {
    // Hacer clic en un enlace y asegurar que el campo esté visible después
    cy.contains('Sugerencias y reclamos')
      .invoke('removeAttr', 'target') // trabajar los elementos en una misma vista
      .click() 

    //para trabajar multiplex dominios
    cy.origin('https://contacto.miexperienciastarbucks.com.co/', () =>{
      cy.get('.infoForm > .form-horizontal > :nth-child(2) > .form-control')
      .should('be.visible').type('33')
    })

  })
  

it('select dinamic img o link', () =>{
    cy.get('img').first().should('be.visible')
    cy.get('img').eq(1).should('be.visible')
    cy.get('img').last().should('be.visible')
})