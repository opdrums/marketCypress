describe('pruebas api con cypress',()=>{

    it('end point get',()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((answer)=>{
            expect(answer.status).to.eq(200)
        })
    })

    it('end point "get" form 1', () =>{
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',
        }).then((answer)=> {
            expect(answer.status).to.eq(200)
        })
    })
    
    it('end point 200 form 2', () =>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('posts').then((res)=>{
            expect(res.status).to.eq(200)
        })

    })

    it('end point 200 form 3', () =>{
        cy.request('https://jsonplaceholder.typicode.com/','posts').then((res)=>{
            expect(res.status).to.eq(200)
        })

    })


    it('validate post 1, tiene por titulo',()=>{
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts/1',
        }).its('body').should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

    })
})