const express = require('express');
const json = require('body-parser').json();

const PetsService = require('./pets.service');
const People = require('../people/people.service');

const PetsRouter = express.Router();

PetsRouter
	.route('/')
	.get((req, res) => {
        const pets = PetsService.get();
		res.json(pets);
	

	})
	.delete(json, (req, res) => {
	res.status(200).send(PetsService.dequeue());
	
	
	});

module.exports = PetsRouter;
