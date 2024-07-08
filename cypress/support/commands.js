Cypress.Commands.add('openUrl', (url) =>{
    cy.visit(url);
})

Cypress.Commands.add('login', (userName, password) => {
    
    cy.xpath("//input[@placeholder='Username']")
    .clear().type(userName);
    cy.xpath("//input[@placeholder='Password']")
    .clear().type(password);
    cy.xpath('//button[@type="submit"]')
    .should('be.visible').click();
});

Cypress.Commands.add('logout',(alert)=>{

    cy.get('.oxd-userdropdown-name').click()
    cy.contains('Logout').should('exist').click()
    cy.contains(alert).should('have.text', alert)
})

Cypress.Commands.add('forgoutPassword', (userName) => {
    
    cy.contains('Forgot your password? ').click()
    cy.xpath("//input[@placeholder='Username']")
    .clear().type(userName)
    cy.xpath("//button[@type='submit']")
    .should('be.visible').click()
    cy.contains('Reset Password link sent successfully').should('have.text','Reset Password link sent successfully')
})
