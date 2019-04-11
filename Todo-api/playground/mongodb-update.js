const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Cannot connect to the database');
    }
    console.log('Successfully connect to the db server');

    const db = client.db('TodoApp');
    //filter, update, return the updated object rather than the original one
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5caab77ac52e5ebca7c28aa9')
    // }, {
    //     $set: {
    //         task: 'fick cat'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Ronaldo'
    }, {
        $set: {
            name: 'Ro di'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});