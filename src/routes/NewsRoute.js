"use strict";

const Hapi = require('hapi');

const NewsHandler = require('../handlers/NewsHandler');

class NewsRoute {
    
    constructor(){
        this.newsHandler = new NewsHandler();
    }

    list() {
        return {
            path: "/api/news",
            method: "GET",
            handler: async (request, reply) => {
                return await this.newsHandler.list(request, reply);      
            }
        }
    }

    find() {
        return {
            path: "/api/news/{id}",
            method: "GET",
            handler: async (request, h) => {
                return `Hello, ${request.params.id}`;        
            }
        }
    }

    update() {
        return {
            path: "/api/news/{id}",
            method: "PATCH",
            handler: async (request, h) => {
                return "Hello, World";        
            }
        }
    }
    
    create() {
        return {
            path: "/api/news",
            method: "POST",
            handler: async (request, h) => {
                return "Hello, rodrigo";        
            }
        }
    }

    remove() {
        return {
            path: "/api/news",
            method: "DELETE",
            handler: async (request, h) => {
                return "Hello, World";        
            }
        }
    }

    routes(){
        return [
            this.list(),
            this.find(),
            this.update(),
            this.create(),
            this.remove()
        ]
    }
}

module.exports = NewsRoute