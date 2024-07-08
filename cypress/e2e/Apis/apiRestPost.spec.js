describe('test post', ()=>{

    it('send request post',function(){
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts',{
            userId: 1,
            id: 1,
            title: "hola mundo",
            body: "123456"

        }).then((answer)=>{
            expect(answer.body).to.have.property('title', 'hola mundo')
        })

    })

    it.only('login form post',()=>{
        cy.request({
            url:'https://api.pibox.app/api/web/v2',
            method:'POST',
            url:'/sessions',
            form:true,
            body:{
                email: 'himalaya@gmail.com',
                password: '123456',
            }
        })
        cy.getCookie('asdasd').should('exist')
    })
})