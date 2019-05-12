let express = require('express');
let bodyParser = require('body-parser');

require('./db/mongoose');
let { Todo } = require('./models/todo');
let { user } = require('./models/user');

let app = express();

let url = '/todos';
app.use(bodyParser.json());

app.post(url, (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });


app.get('/todos' , (req , res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  } , (err)  => {
    res.status(400).send(err);
  });
});

  todo.save().then(
    doc => {
      res.status(200).send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});





app.get('/todos/:id', (req , res) => {
  let id = req.params.id;
  const {ObjectID} = require('mongodb');

  if (!ObjectID.isValid(id)) {
    res.status(404).send("invalid id passed")
  };


  Todo.findById(id).then(user => {
    if (user) {
      res.status(200).send({ user });
    }
    res.status(404).send();
  }).catch((e) => {
    return res.status(400).send();
  });

});




//CHALLENGE START 


    // let url = '/bichi';

    // app.use(bodyParser.json());

    // app.post(url , (req,res)=> {
    //     let done = new Todo({
    //         text : req.body.text
    //     });

    //     done.save().then((cod) =>{
    //         res.send(cod);
    //     }, (err) => {
    //         res.send(err);
    //     });

    // });



//CHALLENGE END

app.listen(3000, () => {
  console.log('Server is Starting  on port 3000');
});

module.exports = {
  app
};
