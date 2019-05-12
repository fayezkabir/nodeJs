
const MongoClient  = require('mongodb').MongoClient;


const {MongoClientt , ObjectID}  = require('mongodb');  //This Is a Example of of de-structuring  the ID in mongo db

let obbj= new ObjectID();

console.log(obbj);




const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';




MongoClient.connect(url,{ useNewUrlParser: true } , (err , dbb) => {
    if(err){
        return console.log('unable to Connect to MongoDb Server ');
    }
    console.log('Connected to MongoDb Server');


    // dbb.db(dbName).collection('Todos').find({
    //     _id : ObjectID('5cd05d49d2b9ae2118dff418')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined , 2));

    // },(err) => {
    //     console.log("Unable to Fetch todoes" , err);
    // });



    // dbb.db(dbName).collection('Todos').find().count().then((count) => {
    //     console.log(`Todos  ${count} `);

    // },(err) => {
    //     console.log("Unable to Fetch todoes" , err);
    // });




    dbb.db(dbName).collection('BoiData').find(
        {
            name :'Molla'
        }
    ).toArray().then((data) => {
        console.log(JSON.stringify(data , undefined ,  2));
        

    } , (err) => {
        if(err) {
            console.log('Unable To  Fetch Data');
        }
    });



    dbb.close();
});











