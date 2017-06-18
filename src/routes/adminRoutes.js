var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Joanita Marquesa',
      read: false
    },
    {
      title: 'C++ Fudamentals',
      genre: 'Computer Science',
      author: 'Mike Tyson',
      read: false
    },
    {
      title: 'WebDev The Future',
      genre: 'Computer Science',
      author: 'Arnold Swartznegger',
      read: false
    },
    {
      title: 'Tá Tranquilo, Tá Favoravel: Uma Releitura Filosófica',
      genre: 'Philosophy',
      author: 'Pittagoruhs',
      read: false
    },
    {
      title: 'IOS é melhor que Android, mas eu uso Android',
      genre: 'Computer Sciente',
      author: 'Mike Tyson',
      read: false
    },
    {
      title: 'Java é devagar',
      genre: 'Computer Science',
      author: 'Arnold Swartznegger',
      read: false
    },];

 
var router = function (nav) {

  adminRouter.route('/addBooks')
    .get(function(req,res){
        var url = 
          'mongodb://localhost:27017/libraryApp';
        
        mongodb.connect(url,function(err, db){
          var collection = db.collection('books');
          collection.insertMany(books, function(err, results){
            res.send(results);
            db.close();
          });
        });
        //res.send('inserting books');
    });

  return adminRouter;
};

module.exports = router;