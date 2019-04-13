const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose-setup');
const {Todo} = require('./../server/model/Todo');

var id = '5caf5aff9aff6516a3f7e143';

if(!ObjectID.isValid(id)){
    console.log('ID is not valid');
}

//mongoose auto convert id string to id object
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos:', todos);
}, (err) => {
    console.log('Error:', err);
});

//find one
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo:', todo);
}, (err) => {
    console.log('Error:', err);
});

//find by id
Todo.findById(id).then((todo) => {
    console.log('Find by Id:', todo);
}, (err) => {
    console.log('Error:', err);
});