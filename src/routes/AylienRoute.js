"use strict";

const Hapi = require('hapi');

const AylienHandler = require('../handlers/AylienHandler');

class AylienRoute {
    
    constructor(){
        this.aylienHandler = new AylienHandler();
    }

    getSentiment() {
        return {
            path: "/api/aylien/sentiment/{phrase}",
            method: "GET",
            handler: async (request, reply) => {
                return await this.aylienHandler.getSentiment(request,reply);      
            }
        }
    }

    routes(){
        return [
            this.getSentiment(),
        ]
    }
}

module.exports = AylienRoute