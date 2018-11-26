"use strict";

const Hapi = require('hapi');
const server = Hapi.server({ port: 8080, host: 'localhost' });

const api = require('./src/routes/Router');


server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) =>'Hello, world'
})

const init = async () => {
    await server.register(api.register());
    await server.start();
    console.log(`Servidor rodando em: ${ server.info.uri }`)
}

init();
