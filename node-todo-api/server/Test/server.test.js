
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');



const todos = [{
    _id: new ObjectID(),
    text :'First Todo'
} ,{
    _id: new ObjectID(),
    text : 'Second todo'
}];


beforeEach((done) => {
    Todo.deleteMany({}).then(() => {
       return Todo.insertMany(todos);
    }).then(() => done());
});
// beforeEach((done) => {
//     Todo.deleteOne({}).then(() => {
//         done();
//     });
// });

describe('POST /todos' , () => {
    it('Should Create a new Todo' , (done) => {
        let text = 'Testing the file';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err , res) => {
            if(err) {
                return done(err);
            }
            Todo.find({text}).then((todoss) => {
                expect(todoss.length).toBe(1);
                expect(todoss[0].text).toBe(text);
                done();
            }).catch((e) => {
                done(e);
            });
        });
    });






    it('Should not Create todo with Bad data', (done) =>  {
        

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if (err) {
                return  done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => {
                done(e);
            });
        });
    });
});





describe('GET /todos' , () => {

    it('should got all extra Added todos ' , (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});



describe('GET/todos/:id' , () => {


    it('Should Return User' ,  (done) => {

        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.user.text).toBe(todos[0].text)
        })
        .end(done);
    })
});



























