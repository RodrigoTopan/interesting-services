"use strict";

const AYLIENTextAPI = require('aylien_textapi');

const textapi = new AYLIENTextAPI({
    application_id:  'b30a11ea',//"YOUR_APP_ID",
    application_key:  'ed8739649ea2b1a28cb99819188b2a1a'//"YOUR_APP_KEY"
}); 

class AylienService { 
    getSentimentAsync(phrase){
        return new Promise((resolve,reject) => {
            textapi.sentiment({
                'text': phrase
            }, function(error, response) {
                if(error)
                    return reject('Ocorreu um erro na análise do texto')
                return resolve(response);
            });
        });
    }
    async sentimentAnalysis(phrase){
        const response = await this.getSentimentAsync(phrase);
        return response;
    }
}

module.exports = AylienService