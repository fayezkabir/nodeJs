
const MongoClient  = require('mongodb').MongoClient;

const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';




MongoClient.connect(url,{ useNewUrlParser: true } , (err , dbb) => {
    if(err){
        return console.log('unable to Connect to MongoDb Server ');
    }
    console.log('Connected to MongoDb Server');


    //DELETE MANY
        
        // dbb.db(dbName).collection('Todos').deleteMany({text : 'MongoDB'}).then((result) => {
        //     console.log(result);
        // },(err) =>{

        //     if(err){
        //         console.log('Unable to Fetch Data');
        //     }
        // });




    //DELETE--ONE

        // dbb.db(dbName).collection('Todos')
        // .deleteOne({text : 'MongoDB Collection'})
        // .then((result) => {

        //     console.log(result);
        // },(err) =>{
        //     if (err) {
        //         console.log('Unable To Fetch');
        //     }
        // });



    //FIND-ONE-AND-DELETE

        // dbb.db(dbName).collection('Todos').findOneAndDelete({completed : false}).then((res) => {
        //     console.log(res);
        // }, (err) => {
        //     console.log('Unable to Connect');
        // });






//CHALLENGE PART 1
    // dbb.db(dbName).collection('Todos').deleteMany({text : 'MongoDB Collection creating'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to Fetch the Data');
    // });

 
//CHALLENGE PART 2
const {MongoClientt , ObjectId}  = require('mongodb');

dbb.db(dbName).collection('Todos').findOneAndDelete( {_id : new  ObjectId("5cd08cc56d4de60e8c7835f2")}).then((result) => {
    console.log(JSON.stringify(result)) ;
},  (err) => {
    console.log('Unable To Fetch The Data');
});

    // dbb.close();
});











