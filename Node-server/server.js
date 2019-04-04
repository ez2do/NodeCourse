const express = require('express');
const path = require('path');
const hbs = require('hbs');
const os = require('os');
const fs = require('fs');

app = express();

app.set('view engine', 'hbs');

//use express middleware, call next to run the code below
app.use((req, res, next) => {
    var now = new Date();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err)
            console.log(err);
    });
    next();
});

//render maintaining site, block access from any other access
// app.use((req, res, next) => {
//     res.render('maintain.hbs');
// });

//use express middleware
app.use(express.static(path.join(__dirname, '/static')));

//register partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//register helper function
hbs.registerHelper('getTime', () => {
    return new Date();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    res.render('homePage', {
        name: 'Tuan Anh',
        site_name: 'Testing server',
        host: os.hostname
    })
});

app.get('/about', (req, res) => {
    res.render('aboutMe', {
        me: 'Tuan Anh',
        age: 21,
        site_name: 'About me Page',
        host: os.hostname,
    })
})

app.get('/jsonData', (req, res) => {
    res.send({
        name: 'Tuan Anh',
        age: 21
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})