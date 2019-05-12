
const db = require('./db.js');


let handleSignUp = (email ,password) => {

    db.saveUser({
        email : email ,
        password : password
    });
};








module.exports = {
    handleSignUp
};

















