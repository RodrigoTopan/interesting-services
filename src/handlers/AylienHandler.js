"use strict";

const AylienService = require('../services/AylienService');

class AylienHandler{
    constructor(){
        this.aylienService = new AylienService();
    }
    async getSentiment(request,reply){
        try{
            const sentiment = await this.aylienService.sentimentAnalysis(request.params.phrase);
            return sentiment;
        }catch(e){
            console.log(e);
        }
    };
}

module.exports = AylienHandler;