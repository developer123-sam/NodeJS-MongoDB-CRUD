const Alien = require('../models/alien');
const express = require('express');
const router = express.Router();

router.get('/:name', async (req, res) => {
    try {
        const aliens = await Alien.find({ name: req.params.name });
        res.send(aliens);
    }
    catch (err) {
        res.send('Error finding aliens.');
    }
});

router.post('/', async (req, res) => {
    let alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try {
        alien = await alien.save();
        res.send(alien);
    }
    catch (err) {
        res.send('Error adding an alien.');
    }
});

router.patch('/:name', async(req, res) => {
    try {
        let alien = await Alien.find({ name: req.params.name });
        alien.sub = req.body.sub;
        alien = await alien.save();
        res.send(alien);   
    }
    catch (err) {
        res.send('Error')
    }
})

module.exports = router;