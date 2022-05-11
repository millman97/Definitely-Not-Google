const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const Pet = require('../models/pet');

app.get('/', (req, res) => {
    const petsData = Pet.all;
    res.send(petsData);
});

app.get('/:id', (req, res) => {
    try {
        const petId = parseInt(req.params.id);
        const selectedPet = Pet.findById(petId);
        res.send(selectedPet);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

app.post('/', (req, res) => {
    const data = req.body;
    const newPet = Pet.create(data);
    res.status(201).send(newPet);
});

app.delete('/:id', (req, res) => {
    const petId = parseInt(req.params.id);
    const petToDestroy = Pet.findById(petId);
    petToDestroy.destroy();
    res.status(204).send();
});

module.exports = app;
