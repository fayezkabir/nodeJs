require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const {user} =require('./../server/models/user') ;

const {ObjectID} =require('mongodb');


// let id = '5cd05d49d2b9ae2118dff418';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not Found');
// }




// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });



// Todo.findOne({
//   _id:id
// }).then(
//   todo => {
//     console.log('Todo', todo);
//   },
//   err => {
//     console.log('Unable To Fetch Data');
//   }
// );

// Todo.findById(id).then(
//   todo => {
//     if(!todo) {
//       return console.log('Id not Found');
//     }
//     console.log('Todo', todo);
//   },
//   err => {
//     console.log('Unable To Fetch Data');
//   }
// ).catch((e) => {
//   console.log(e);
// });



let email = 'fayezkabbir.12@gmai.comm';

user.findOne({email : email}).then ( (user) => {
  if(!user) {
    return console.log('Unable to find User');
  }
  console.log(user);
}).catch((e) => {
  console.log(e);
});

















