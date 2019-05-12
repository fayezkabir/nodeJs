
let add = (a,b) => {
    return a+b;
};


let square = (x) => {
    return x * x ;
}



let setName = (user , fullname)  => {

    let names = fullname.split(' ');

    user.firstname = names[0];
    user.lastName = names[1];

    return user;
}




let asyncAdd = (a,b,callback) => {
    setTimeout(() => {
        callback(a+b);
    },1000);
};


let asyncSquare = (x ,callback) => {

    setTimeout(() => {
        callback(x *x);
    } , 1000);
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
};























