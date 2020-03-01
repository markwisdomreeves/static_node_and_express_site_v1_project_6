const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json')

// making a get request to the home page
router.get('/', (req, res)=> {
    res.render('index', {
        projects
    });
});

module.exports = router;



