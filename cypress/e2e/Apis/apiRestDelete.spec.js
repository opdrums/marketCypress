describe('end point DELETE', ()=>{

    it('funtion delete end point', function(){
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((answer)=>{
            if(answer.status == 200){
                expect(answer.status).to.eq(200)
            }else{
                cy.log('bug')
            }
        })
    })
})