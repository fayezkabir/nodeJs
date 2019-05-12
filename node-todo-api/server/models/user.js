
let mongoose = require('mongoose');

//CHALLLENGE PART 2

let user = mongoose.model('user', {
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
  
  
  
  
  
//   let newUser = new user({
//     email: '        fayezkabbir.12@gmai.comm  '
//   });
  
//   newUser.save().then(
//     res => {
//       console.log(res);
//     },
//     errr => {
//       console.log('Unable to Create The Data');
//     }
//   );
  


  module.exports = {
      user
  }; 