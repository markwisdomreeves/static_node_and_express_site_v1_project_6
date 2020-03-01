const express = require('express');
const router = express.Router();

// making a get request to the about page
router.get('/', (req, res)=> {
    res.render('about');
});

module.exports = router;