
 const request = require('supertest');
 const expect = require('expect');


 let app = require('./server').app;

 describe('Express Server Testing' , () => {


     describe(' / Home Page Testing' , () => {

         it('Should Return Hello ' , (done) => {
             request(app)
             .get('/')
             .expect(200)
             .expect((res) =>{
                 expect(res.body).toInclude({
                     error : 'page not found'
                 });
             })
             .end(done);
         });
     });   


     describe('/User Page Testing' , () => {

         it('Should return /User Object' , (done) => {
             request(app)
             .get('/user')
             .expect(200)
                 .expect((res) => {
                     expect(res.body).toInclude({  //****** use .toContainEqual   if you want to check wheather an object ia exists  in array of objects
                         name : 'Fayez Kabir',
                         age :23
                     });
                 })
             .end(done);
         });
     });




 });























