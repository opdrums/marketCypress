import webBase from "../pages/webBase";

const getElement = new webBase

Cypress.Commands.add('login', (userName, password) => {
    
    getElement.fielText("//input[@placeholder='Username']", userName)
    getElement.fielText("//input[@placeholder='Password']", password)
    getElement.elementVisibleClick('//button[@type="submit"]')
    getElement.screenshot()
});
