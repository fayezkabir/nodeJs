
const MongoClient  = require('mongodb').MongoClient;
const  {MongoClientt , ObjectId} = require('mongodb');

const dbName = 'TodoApp';
const url = 'mongodb://localhost:27017';




MongoClient.connect(url,{ useNewUrlParser: true } , (err , dbb) => {
    if(err){
        return console.log('unable to Connect to MongoDb Server ');
    }
    console.log('Connected to MongoDb Server');



    // dbb.db(dbName).collection('Todos').findOneAndUpdate({
    //     _id : new ObjectId('5cd25cf1ff2a542592b312b2')
    // }, {
    //     $set: {
    //         completed : true
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unab;e to Fetch th Data');
    // });


//CHALLENGE PART 1 (update the name)

    // dbb.db(dbName).collection('BoiData').findOneAndUpdate({
    //     _id : new ObjectId("5cd0653eb028f21698b1b1e7")
    // },{
    //     $set : {
    //         name  : 'Fayez  Kabir Molla'
    //     }
    // },{
    //     returnOriginal : false
    // }).then((res) => {
    //     console.log (res);
    // } , (err) => {
    //     if(err) {
    //         console.log('Unable To Fetch Data');
    //     }
    // });

//CHALLENGE PART 2(increment the age field  by 1)

    dbb.db(dbName).collection('BoiData').findOneAndUpdate({
    
    // },{
    //     $inc : {age : +1}
    // },{
    //     returnOriginal : false
    // }).then((res) => {
    //     console.log(res)
    // } , (err) => {
    //     console.log("UNable To Fetch Tha Data");
    // });
    //     // dbb.close();
});











