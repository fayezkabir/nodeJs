const express = require('express');
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');
let app = express();

app.use(express.static(__dirname + '/public')); //THIS IA A MIDDLE WARE,,,kind of addon type


app.use((req, res ,next) => {
  let now = new Date().toString();
  let log = `${now} : ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log' , log +'\n' , (err) =>{
    if(err){
      console.log('error in appending file'); 
    }
  });
  next();
});


// app.use((req,res,next) => {
//   res.render('maintainence.hbs');
// });




hbs.registerPartials(path.join(__dirname + '/views/partials'));



app.set('view engine' , 'hbs'); //CONFIGURING HBS VIEW ENGINE




hbs.registerHelper('getCurrentYear' , () =>{
   return new Date().getFullYear();
});

hbs.registerHelper ('screamIt' , (text) => {
  return text.toUpperCase();
})



app.get('/', (req, res) => {
  // res.send('<h1>Hello Expres !!</h1>');
  res.render('home.hbs', {
    greeting: 'Home Page',
    pageTitle: 'Welcome to My WebSite',
    text: 'The Current Time Is :-',
    currentDate: getCur()
  });
});



app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle : 'About page',
    currentYear : new Date().getFullYear(),
    currentDate:  getCur()
  });
});



function getCur() {
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
return today
}


app.get('/bad', (req, res) => {
  res.send({
    message: 'handling the Errors'
  });
});

app.listen(3000, () => {
  console.log('Server id Up and Running ...Ready To Go')
});




























































































