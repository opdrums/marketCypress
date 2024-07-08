describe('test put', ()=>{

    it('send request put',function(){
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2',{
     
            title: "hola mundo",
            body: "123456"

        }).then((answer)=>{
            expect(answer.body).to.have.property('title', 'hola mundo')
        })

    })
})