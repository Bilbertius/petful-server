const express = require('express')
const json = require('body-parser').json()

const PetsService = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
    const pets = PetsService.get()
	res.json(pets);
	

});

router.delete('/', json, (req, res) => {
	PetsService.dequeue()
		res.send(204)
	
});

module.exports = router
