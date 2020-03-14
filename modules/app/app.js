const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
	origin: 'https://a-pet-io-ful.now.sh/',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204
}));


app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

module.exports = app;
