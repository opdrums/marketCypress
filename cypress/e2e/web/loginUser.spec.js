import webBase from "../../pages/webBase";

const login = new webBase(); 

describe('login User', () => {

    let dataBase;

    beforeEach(function() {

        cy.fixture('login').then(credentials => {
            dataBase = credentials;
            login.settingTest.openUrl(dataBase.url)
        });
    })

    it('login sucess', function() {
        login.fieldBase.fillTextFieldByXPath("//input[@placeholder='Username']", dataBase.userName)
        login.fieldBase.fillTextFieldByXPath("//input[@placeholder='Password']", dataBase.password)
        login.clickBase.clickElementByXPath('//button[@type="submit"]')
    });


    it('logout success', function(){
        login.fieldBase.fillTextFieldByXPath("//input[@placeholder='Username']", dataBase.userName)
        login.fieldBase.fillTextFieldByXPath("//input[@placeholder='Password']", dataBase.password)
        login.clickBase.clickElementByXPath('//button[@type="submit"]')
        login.clickBase.clickElementByGet('.oxd-userdropdown-name')
        login.containsBase.containsExistClick('Logout')
        login.containsBase.containsExistClick(dataBase.title)
    });

    it('forgot password', function() {
        login.containsBase.containsExistClick('Forgot your password? ')
        cy.wait(1000)
        login.fieldBase.fillTextFieldByXPath("//input[@placeholder='Username']", dataBase.userName)
        login.clickBase.clickElementByXPath("//button[@type='submit']")
        login.containsBase.containsExistClick(dataBase.alertLinkSucces)
    })
})
