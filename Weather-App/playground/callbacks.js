let getUser = (id, fn) => {
  let user = {
    id: id,
    name: 'fayez'
  };
  setTimeout(() => {
    //here we  have passed  soma data to the   call back function
    fn(user);
  },3000);
};


//this callback in only works when it has some data
getUser(31, (userObject) => {
  console.log(userObject);
});



 


















































// const afterGettingUser = user => {
//   console.log(user);
// }
// getUser(5222, afterGettingUser)