Pasos para instalar y configurar:

* Crear una carpeta donde va tu proyecto
* Comando npm init --inicializar el proyecto
* npm install cypress --save-dev
* npx cypress open -- abrir crypress y configurar
* npm install -D cypress-xpath   
* Configurar el proyecto en git hub

Librerias externas:
* xpath https://www.npmjs.com/package/cypress-xpath
* npm install --save-dev mochawesome


Pasos para correr el proyecto:

* Requiere correr desde cypress terminal: 
    npx cypress open
    Elegir el navegador
    Elegir el test

* Requiere correr desde consola usando la key
    ingresar https://cloud.cypress.io/profile --hacer login
    https://cloud.cypress.io/invitation/be51922e-fec1-4c76-9e0c-165ddc85db2b --proyecto
    npx cypress run --record --key 07d06e25-3b04-4502-9e50-4e3215624ae6 --terminal

* Requiere correr con mochawesome terminal
    cypress run --reporter mochawesome
    npx cypress run --reporter mochawesome --spec "ruta del test"

* Requiere correr solo con chrome
    npx cypress run -b chrome --spec
    npx cypress run -b chrome --spec "ruta del test
