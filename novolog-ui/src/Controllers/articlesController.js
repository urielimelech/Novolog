import articles from '../localDB/articles.json'

export class ArticlesController {
    constructor() { }
    getArticles() {
        return articles
    }
}