const express = require('express');
const cors = require('cors');
const app = express();
const {CLIENT_ORIGIN} = require('../../config')

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", `${CLIENT_ORIGIN}/*`); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

module.exports = app;
