const express = require('express');
const aliens = require('../routes/aliens');

module.exports = function(app) {
    app.use(express.json());
    app.use('/aliens', aliens);
}