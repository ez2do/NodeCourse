// const MongoClient = require('mongodb').MongoClient;

//it's called object destructuring
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj, obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) return console.log('Cannot access to the mongodb server\n', err);
    console.log('Successfully connect to the mongodb server');

    const db = client.db('TodoApp');
    //insert to table Todos
    db.collection('Todos').insertOne({
        task: 'conquer the world',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to the collection\n', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //insert to table users
    db.collection('Users').insertOne({
        name: 'Tuan Anh',
        age: 21,
        location: 'Ha noi, Viet Nam',
        role: 'admin'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert data to the collection\n', err);
        }
        console.log(result.ops);
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});