import webBase from "../../pages/webBase";

const web = new webBase

describe('how automation open url', ()=>{

    let dataBase;

    beforeEach(function() {
        cy.fixture('login').then(credentials => {
            dataBase = credentials;
            web.openUrl(dataBase.url)
        });
    });

    
    it('validate title url', function(){
        web.containsAlertText(dataBase.title)
    })
})
