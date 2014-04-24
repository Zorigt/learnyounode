var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = {};
    var sort = [["State",1], ["Temperature",-1]];
    var operator = { };
    var options = { };

    db.collection('data').find(query, sort).toArray( function(err, doc) {
        if(err) throw err;

       
            console.log(doc.State);
       
    });
});
