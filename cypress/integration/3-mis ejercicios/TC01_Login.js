describe('Login', function(){
       var accesstoken;
        it('Generar token', function(){
            cy.request({
                method: 'GET',
                url:    'https://api-qa.prismamediosdepago.com/v1/oauth/accesstoken?grant_type=client_credentials',
                headers: {
                          'Authorization'    : 'IGViUGp4aVUwQlh5RDhHc1NrdDBYWEdPSTFqNTRmNTlCOnRxeXRiQUFHM1ZxS2V6UUM'
                }
            }).then(function(response){
                accesstoken = response.body.access_token;
                console.log(accesstoken);


            })

        })

        it('Generar Intencion', function(){
            cy.request({
                method: 'POST',
                url: 'https://developers.decidir.com/api/integrations/largeaccounts/intentions',
                headers: {
                        'apikey': 'fb93a9817d8a4ac0b7273fd33a06dc91',
                        'Content-Type': 'application/json'
                },
                body: {
                        "integrator_intention_id": "QR-SP-111111",
                        "cuit": "30-35987123-9",
                        "branch": "Rivadavia 4483",
                        "checkout": "11",
                        "terminal_number": "90000505",
                        "intention_type": "payment",
                        "currency": "ARS",
                        "original_amount": 4.44,
                        "bins_max_quantity": 3,
                        "payment_methods_data": [
                            {
                                "payment_method_id":1,
                                "bank_ids": [
                                    1,
                                    11,
                                    14
                                ]
                            }
                        ],
                        "benefits_methods_data": [
                            {
                                "benefits_card": {
                                    "code": "CC",
                                    "description": "Clarin 365 Classic"
                                }
                            },
                            {
                                "benefits_card": {
                                    "code": "CP",
                                    "description": "Clarin 365 Plus"
                                }
                            }
                        ]
                    }

                });
            });
        return accesstoken;

    });