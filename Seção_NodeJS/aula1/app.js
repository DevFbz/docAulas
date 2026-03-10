const path = require('path');
const req = require('./mod1')
const { Pessoa } = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e=> console.log(e))


