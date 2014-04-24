var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var grades = db.collection('data');

    var cursor = grades.find({});
    //cursor.limit(20);
    //cursor.sort('State', 1);
    cursor.sort([['State', 1], ['Temperature', -1]]);

    //var options = { 'skip' : 1,
    //                'limit' : 4,
    //                'sort' : [['grade', 1], ['student', -1]] };
    //var cursor = grades.find({}, {}, options);
var startingState = '';
var stateTemp = -200;
    cursor.each(function(err, doc) {
        if(err) throw err;
        if(doc == null) {
            return db.close();
        }
         
        if (doc.State == null )
             {
                //db.collection('data').update({"_id":doc._id}, {'$set' : {month_high: true}}, {"upsert": true}, function(err2, ups){ 
                    //if (err2) throw err2;

                    //console.dir(ups);
               // });
           doc['month_high']=true;
           //change stateName to new state
           //startingState = stateName;
           //console.log(doc);
           //console.log(doc.State + "  " + doc.Temperature + " " + doc.month_high);
       }
       var stateName = doc.State;

       if(startingState != stateName && stateName != null)
       {
           doc['month_high']=true;
           //db.collection('data').update({"_id":doc._id}, {'$set' : {month_high: true}}, {"upsert": true}, function(err, ups){ 
                    //if (err) throw err;

                   //console.dir(ups);
               //});
           //change stateName to new state
           startingState = stateName;
           console.log(doc.State + "  " + doc.Temperature + " " + doc.month_high);
           stateTemp = doc.Temperature;
       }
       else if(startingState == stateName && stateTemp == doc.Temperature) {
            doc['month_high']=true;
           //change stateName to new state
           console.log(doc.State + "  " + doc.Temperature + " " + doc.month_high);
       }
    });
});
