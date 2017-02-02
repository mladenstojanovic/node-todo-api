// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'buy helmet'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'buy helmet'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Mladen Stojanovic'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('58927b14ec5b324720a54536')}).then((result) => {
    console.log(result);
  });




  // db.close();
});
