const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Can not connect to the database');
    }

    const db = client.db('TodoApp');

    db.collection('Todos').find({completed: true}).toArray().then((docs, err) => {
        if(err){
            return console.log('1', err);
        }
        console.log('2', docs);
    });

    client.close();
})