const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose-setup');
const {Todo} = require('./model/Todo');
const {User} = require('./model/User');
const {ObjectID} = require('mongodb');

var app = express();
app.use(bodyParser.json());

//handle POST request
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

//handle GET request
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

//GET specific todo
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid id');
    }

    Todo.findById(id).then((todo) => {
        if(!todo)   return res.status(404).send('Id not exists');
        res.send(todo);
    }, (err) => {
        res.send('Error:\n', err);
    });
});

//DELETE specific todo
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid id');
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.send('Id is not exist');
        }
        res.send({
            deleted: 'succefully',
            todo: todo
        });
    }).catch((err) => {
        res.status(404).send('Error:\n' + err);
    });
});

//UPDATE specific todo
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid ID');
    }

    //handle user input update
    var body = _.pick(req.body, ['task', 'completed']);

    if(_.isBoolean(body.completed) && body.completed == true){
        body.completedAt = new Date();
    } else{
        body.completed = false;
        body.completedAt = null
    }

    //update on the database
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            res.status(404).send('Id is not exist');
        }
        res.send({todo});
    }).catch((err) => {
        res.send('Error:\n' + err);
    });
});

app.listen(3000, () => {
    console.log('Start listening on port 3000');
});