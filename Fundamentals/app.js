
// @@@@@@@@@@@@@@@@@@@  requir() using built-in function



console.log('Application Started  app.js');



const fs=require('fs');  //built-in node module(fs-> file System)

fs.appendFile('greeting.txt', 'helloWorld !' ,function(err){

    if(err){
        console.log('Unable to Write  to file');
    }
});




const os=require('os');  //built-in node module(os-> Operating System)

let user = os.userInfo();

console.log(user);




//mixing two module together to get  how to interact fileSystem with Operating System

fs.appendFile('greeting.txt', `hello ${user.username}  !` ,function(err){

    if(err){
        console.log('Unable to Write  to file');
    }
});




//@@@@@@@@@@@@@@@@@@@@@  requir() using  Own created files


//now exporting module from another file

const  notes=require('./notes.js');




fs.appendFile('greeting.txt', `hello ${user.username}  !   You Are ${notes.age}` ,function(err){

    if(err){
        console.log('Unable to Write  to file');
    }
});



var res = notes.addNote();
console.log(res);



var  result = notes.add(5,7);

console.log(result);






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ reqiurd() using 3RD party modules

//here we used LODASH  utility


const _ =require('lodash');
console.log(_.isString(true));
console.log(_.isString('fayez'));


let filteredArray = _.uniq(['fayez','hiiiii','king','fayez',1,3,5,6]);

console.log(filteredArray);


