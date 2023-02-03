import languages from '../localDB/language.json'

export class LanguagesController {
    constructor() {    }
    getLanguages() {
        return languages.language
    }
}