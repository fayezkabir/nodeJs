let mongoose = require('mongoose'); // loading mongoose

mongoose.Promise = global.Promise; // set up mongoose   to use promises rather than default callback

mongoose.connect('mongodb://localhost:27017/TodoApp' , {useNewUrlParser: true}); // connecting to the data base
// mongoose.connect('mongodb://localhost:27017/User', { useNewUrlParser: true }); // connecting to the data base

module.exports = {
  mongoose: mongoose
};
