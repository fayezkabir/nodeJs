
const MongoClient  = require('mongodb').MongoClient;


// const {MongoClientt , ObjectID}  = require('mongodb');  //This Is a Example of of de-structuring  the ID in mongo db

// let obbj= new ObjectID();

// console.log(obbj);



//This is  called de-structuring where u can pool outine field  from a pbject
// let user = {name : 'Fayez',age: 264}
// let {name} = user;
// console.log(name);



const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';




MongoClient.connect(url,{ useNewUrlParser: true } , (err , dbb) => {
    if(err){
        return console.log('unable to Connect to MongoDb Server ');
    }
    console.log('Connected to MongoDb Server');


    // db.collection('Todos')
    dbb.db(dbName).collection('Todos').insertOne({
       
        text : 'MongoDB Collection creating',
        completed : false
    } ,(err,res) => {
        if(err){
            return console.log('unable to do connect' , err);
        }
        console.log(JSON.stringify(res.ops , undefined , 2));
        console.log((res.ops[0]._id.getTimestamp()));//this the the time stamp at time of this document created
    });

    dbb.close();
});




//challenge part :)


// MongoClient.connect(url , {useNewUrlParser : true} , (err , ResDB) => {
//     if (err ) { 
//         return console.log('Unable To  Create Server');
//     }
//     console.log('Server Created And Running');

//     ResDB.db(dbName).collection('BoiData').insertOne({

//         name : 'Fayez Kabir',
//         age : 23,
//         location : 'Kolkata'
//     } , (err , res) => {
//         if(err) { 
//             return console.log('Unable to create Collections');
//         }else{
//             console.log(JSON.stringify(res.ops , undefined , 2));
//         }
//     });
//     ResDB.close();
// });


//First challenge Done Successfully


















