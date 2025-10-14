const routes = require('express').Router();

// Home test route
routes.get('/', (req, res) => {
    console.log('Root /contacts route accessed');
  res.send('Hello World');
});

// Contacts route
routes.use('/contacts', require('./contacts'));

module.exports = routes;
