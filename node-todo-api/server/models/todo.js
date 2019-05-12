let mongoose = require('mongoose');

let Todo = mongoose.model('Todos', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
},'Todos');

// let newTodo = new Todo({
//     text : 'GO to EXAM'
// });

// newTodo.save().then((res) => {
//     console.log('Saved Result --> ' , res);
// } , (err) => {
//     console.log('Unable to Save The Documents');
// });

// let newTodo = new Todo({
//     text : '  should save    '
// });

//  CHALLENGE  START

// let newTodo = new Todo({
//     text : 'Doing Challenge',
//     completed : true,
//     completedAt  : 2
// });

// newTodo.save().then((res) => {
//     console.log('Saved Result --> ' , res);
// } , (err) => {
//     console.log('Unable to Save The Documents');
// });

//  CHALLENGE END

module.exports = {
  Todo
};
