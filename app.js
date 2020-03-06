
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
