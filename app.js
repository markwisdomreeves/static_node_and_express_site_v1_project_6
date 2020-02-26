
'use strict';

const express = require('express')
const app = express();
const path = require('path');

// locals varibles
app.locals.jsonData = require('./jsonData/data.json');

// adding all the routes in the app.js
const index = require('./allRoutes/index');
const about = require('./allRoutes/about');
const project = require('./allRoutes/project')

app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')))

// router-level middleware setup for homepage
app.use('/', index);

// router-level middleware setup for aboutpage
app.use('/about', about);

// router-level middleware setup for aboutpage
app.use('/project', project);

// 404 - page not found error
app.use(function(req, res, next) {
    console.error('Ooooh, an error has occurred')
    new Error('Something went wrong :-(')
    return res.status(404).send({ message: 'Route'+req.url+'Page Not found.'});
});
  
// 500 - Any server error
app.use(function(err, req, res, next) {
    console.error('Wooyoo, server error has occurred');
    return res.status(500).send({ error: err });
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on post ${port}!`)
})
















// app.use('/static', express.static('public'));
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const server = app.listen(3000, () => {
//     console.log(`Express is running → PORT ${server.address().port}`);
// });

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage')
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.use((req, res, next) => {
//     setTimeout(function () {
//         try {
//           throw new Error('Oooh, an error has ocurred');
//         } catch (err) {
//           next(err)
//         }
//     }, 100)
// });

// app.use(function(err,req,res,next) {
//     console.log(err.stack);
//     res.status(500).send({"" : err.stack});
// });