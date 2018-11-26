"use strict";

const axios = require('axios');

class NewsService { 
    async list(){
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/item/8864.json');
        return response;
    }
}

module.exports = NewsService