class settingTest{

    openUrl(url){
        cy.visit(url)
    }

    openMobil(mobil, alto , ancho){
        cy.viewport(mobil) 
        cy.viewport(alto, ancho)
    }

    screenshot(){
        cy.screenshot()
    }

    simulateLocation(lat, long){
        cy.window().then(win => {
            win.navigator.geolocation.getCurrentPosition = (successCallback, errorCallback, options) => {
              const position = { coords: { latitude: lat, longitude: long} };
              successCallback(position);
            };
          });
    }
    
}

export default settingTest