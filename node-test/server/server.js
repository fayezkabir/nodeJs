
const express = require('express');

let app = express();


app.get('/' , (req ,res) => {
    res.status(200).send({
        error : 'page not found',
        name: 'Todo App'
    });
});



app.get('/user' , (req , res) =>{
    res.status(200).send([{
        name : 'Fayez Kabir',
        age : 23
    },{
        name : 'Legend Kabir',
        age : 23
    },{
        name : 'King Kabir',
        age : 23
    }
]);
});

app.listen(3000);




module.exports = {
    app
};























