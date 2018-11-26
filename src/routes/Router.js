"use strict";

const Hapi = require('hapi');

const NewsRoute = require('./NewsRoute');
const AylienRoute = require('./AylienRoute');

class Router{
    static register(){
        const routes = [
            ...new NewsRoute().routes(),
            ...new AylienRoute().routes()
        ]
        return {
            name: "APIs",
            register: (server, options) => {
                server.route(
                    routes
                );
            }
        }
    }
}

module.exports = Router;