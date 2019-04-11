const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Error:', err);
    }
    console.log('Successfully connect to mongodb server');

    const db = client.db('TodoApp');

    //delete many
    // db.collection('Todos').deleteMany({task: 'clean the house'}).then((result, err) => {
    //     if(err) {
    //         return console.log('err', err);
    //     }
    //     console.log('Result:', result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({task: 'conquer the world'}).then((result, err) => {
    //     if(err){
    //         return console.log('err', err);
    //     }
    //     console.log('Result:', result);
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({complete: true}).then((result) => {
        console.log(result);
    });

    client.close();
});

