
const utils = require('./utils');
const expect = require('expect');

describe('Utils Function' ,() => {

    it('Should Add Two Numbers' , () => {
        let res = utils.add(12 , 20);
    
    
        expect(res).toBe(32);
    
        // if (res !== 32) {
        //   throw new Error(`Value Not Correct...Expected 32 . But got ${res} `);
        // }
    }); //behavior driven developement  mocha based on
    
    
    
    it('Asynchronous Add ' , (done) => {
        utils.asyncAdd(4 , 3 , (sum) => {
            expect(sum).toBe(7);
            done();
        });
    }); // done is passed because we want to tell mocha tha the program is not finished yet It Will Take Time 
    
    
    
    
    
    it('Asynchronous Square ' , (done) => {
        utils.asyncSquare(5,(result) =>{
            expect(result).toBe(25);
            done();
        });
    });
    
    
    
    
    
    
    it('Should Squaring The Number' , () => {
        let res =utils.square(5);
    
    
        expect(res).toBe(25);
        // if(res !== 25){
        //     throw new Error(`Error In Result  Expected 25 ..But got ${res}`);
        // }
    
    });
    
    

});


describe('playing With Different Expect Properties' , () =>{



        
    it('Should expect Some value' , () =>{
        // expect(12).toNotBe(15);
        expect(12).not.toBe(15);
        expect({name : 'Fayez'}).toEqual({name : 'Fayez'});

        // expect([2 , 3 ,4]).toInclude(2);  //i have changed(toInclude -> toContain) as  toIchude  is not supported any more 
                                            // toContain is use when we want to check a value wheather is contain in an array or not
        expect([2 , 3 ,4]).toContain(2);
        // expect([2 , 3 ,4]).toExclude(5);  //
        expect([2 , 3 ,4]).not.toContain(5);


        expect({
            name : 'Fayez',
            age : 22
        // }).toInclude({age:22});   // see Bottom to the page 
        }).toMatchObject({age:22});
    });




    it('Should set Firstname LastName' , () => {
        let user = {location :'kolkata',age : 22};
        let res = utils.setName(user , 'Fayez Kabir');

        expect(user).toEqual(res);
        // expect(res).toMatchObject({ // see bottom of the page  
        expect(res).toMatchObject({
            firstname : 'Fayez',
            lastName : 'Kabir'
        });
    });



});








// .toInclude  -->  .toMatchObject

//.toExclude  -->   .not.toContain

// .toNotBe  -->  .not.toBe










