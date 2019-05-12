
let mongoose = require('mongoose'); // loading mongoose

mongoose.Promise = global.Promise; // set up mongoose   to use promises rather than default callback

// mongoose.connect('mongodb://localhost:27017/ToodoApp' , {useNewUrlParser: true}); // connecting to the data base
mongoose.connect('mongodb://localhost:27017/User', { useNewUrlParser: true }); // connecting to the data base


// let Todo =   mongoose.model('ToodoApp', {
//     text : {
//         type : String,
//         required : true,
//         minlength : 1,
//         trim  : true
//     },
//     completed : {
//         type: Boolean,
//         default : false
//     },
//     completedAt :{
//         type : Number,
//         default : null
//     }
// });

// let newTodo = new Todo({
//     text : '  should save    '
// });

// // let newTodo = new Todo({
// //     text : 'GO to EXAM'
// // });

// newTodo.save().then((res) => {
//     console.log('Saved Result --> ' , res);
// } , (err) => {
//     console.log('Unable to Save The Documents');
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

//CHALLLENGE PART 2

let user = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 2,
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
});





let newUser = new user({
  email: '        fayezkabbir.12@gmai.comm  '
});

newUser.save().then(
  res => {
    console.log(res);
  },
  errr => {
    console.log('Unable to Create The Data');
  }
);
