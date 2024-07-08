describe('login User', () => {

    let dataBase;

    beforeEach(function() {
        cy.fixture('login').then(credentials => {
            dataBase = credentials;
            cy.openUrl(dataBase.url)
        });
    })

    it('login sucess', () => {
        cy.login(dataBase.userName,dataBase.password)
    });


    it('logout success', function(){
        cy.login(dataBase.userName,dataBase.password)
        cy.logout(dataBase.title)
    });

    it('forgot password', function() {
       cy.forgoutPassword(dataBase.userName)
    });

})