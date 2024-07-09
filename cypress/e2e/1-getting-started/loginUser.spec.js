import webBase from "../../pages/webBase";

const login = new webBase

describe('login User', () => {

    let dataBase;

    beforeEach(function() {
        cy.fixture('login').then(credentials => {
            dataBase = credentials;
            login.openUrl(dataBase.url)
        });
    })

    it('login sucess', () => {
        cy.login(dataBase.userName,dataBase.password)
    });


    it('logout success', function(){
        cy.login(dataBase.userName,dataBase.password)
        login.getElementClick('.oxd-userdropdown-name')
        login.containsElmClick('Logout')
        login.containsAlertText(dataBase.title)
    });

    it('forgot password', function() {
       login.containsElmClick('Forgot your password? ')
       login.waitExplicity()
       login.fielText("//input[@placeholder='Username']", dataBase.userName)
       login.elementVisibleClick("//button[@type='submit']")
       login.containsAlertText(dataBase.alertLinkSucces)
    });
})