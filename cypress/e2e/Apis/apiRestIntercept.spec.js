describe('el titulo', ()=>{

    it('validate que', () =>{
        cy.intercept('GET','https://jsonplaceholder.typicode.com/posts/1', {
            status:500,
            body:{
                name:"esto es stubbeado"

                }
            }
        )
    })
})