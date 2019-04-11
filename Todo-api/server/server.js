const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose-setup');
const {Todo} = require('./model/Todo');
const {User} = require('./model/User');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        task: req.body.text,
        complete: req.body.complete
    });
    
    todo.save().then((doc) => {
        console.log(doc);
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Start listening on port 3000');
});