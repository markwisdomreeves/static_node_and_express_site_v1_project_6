const express = require('express');
const router = express.Router();
const { projects } = require('../jsonData/data.json')

// making a get request to the home page
router.get('/', (req, res)=> {
    res.render('index', {
        projects
    });
});

module.exports = router;



