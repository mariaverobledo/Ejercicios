describe ('HTTP EXAMPLE', function(){
        it('GET', function(){

            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users/2'

            }).then(function(response){

                var jsonData = response.body;
                var firstName = jsonData.data.first_name;
                console.log(firstName);
                expect(response.body).have.property('data');
            })

        it('GET segunda prueba', function(){

            cy.request({
                method: 'GET',
                url:'https://reqres.in/api/users/'+firstName
            })


            })
            });

});