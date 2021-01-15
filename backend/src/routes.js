const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json('Hello'));

module.exports = routes;
