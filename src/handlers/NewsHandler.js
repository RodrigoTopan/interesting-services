"use strict";

const NewsService = require('../services/NewsService')

class NewsHandler{
    constructor(){
        this.newsService = new NewsService();
    }
    async list(request,reply){
        try{
            const hackerNew = await this.newsService.list();
            return hackerNew;
        }catch(e){
            console.log(e);
        }
    };
}

module.exports = NewsHandler;