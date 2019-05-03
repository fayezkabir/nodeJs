
// let somePromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // resolve('Hey Learning Promise');
//     reject('Unable to FullFill Promise');
//   }, 5500);

// });
   

// somePromise.then((message) =>{
//     console.log('success : ' , message);
// } , (errorMessage) => {
//     console.log('error --> ' ,errorMessage)
// })



let asynAdd = (a,b) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else {
                reject('Arguments Must be Number');
            }

        } , 2500);
    });
};




asynAdd(5,'7').then((results) =>{
    console.log('results' , results);
    return asynAdd(results , 33);

}).then((res) => {
    console.log('results Shold be 45 ->' , res);

}).catch((errorMessage) => {
    console.log('Printing Error In Catch Block ' , errorMessage);
})








// asynAdd(5,7).then((results) =>{
//     console.log('results' , results);
//     return asynAdd(results , '33');

// } , (errorMessage) => {
//     console.log('error : ->', errorMessage);
// }).then((res) => {
//     console.log('results Shold be 45 ->' , res);

// }, (errorMessage) => {
//     console.log('Printing error Message' , errorMessage);

// });























