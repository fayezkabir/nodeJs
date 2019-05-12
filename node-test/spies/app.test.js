
const expect = require('expect');
const rewire = require('rewire');



let app = rewire('./app');

describe('App', () =>{

    let db  = {
        saveUser: expect.createSpy()
    };
    app.__set__('db' ,db);
  
    it('Should call the Spy Correctly' , () => {
        let spy = expect.createSpy();
        spy('fayez' ,12);
        expect(spy).toHaveBeenCalledWith('fayez' ,12);
    });

    it('should call saveUser  with Object' , () => {

        let email = 'fayezkabir.com' ;
        let password = '123@abc';

        app.handleSignUp(email , password);
        expect(db,saveUser).toHaveBeenCalledWith({email , password});

    });
});









