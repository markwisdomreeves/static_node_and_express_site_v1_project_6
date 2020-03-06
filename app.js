
const express = require('express');
const app = express();
const path = require('path');

const index = require('./routes/index');
const about = require('./routes/about');
const project = require('./routes/project');

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/about', about);

app.use('/project', project);

// 404 error - page not found
app.use((req, res, next) => {
    const err = new Error("We are sorry, Page Not found.");
    err.status = 404;
    next(err);
})

// internal server error - 505 server error
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(err.message);
    console.log(err.stack);
    console.log(err.status);
    res.render('error');
    console.log('Sorry user, internal server error occurred');   
})


let PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is listening on → PORT ${server.address().port}`);
});
















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

// app.use('/static', express.static('public'))