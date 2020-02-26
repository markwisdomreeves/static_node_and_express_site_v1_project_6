const express = require('express');
const router = express.Router();

// get all project from the data.json file
const projects = require('../jsonData/data.json');

// making a get request to the home page
router.get('/', (req, res, next)=> {
    res.statusCode = 200;
    res.render('index', {
        projects
    });
});

module.exports = router;

