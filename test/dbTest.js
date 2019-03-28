"use strict";
const db = require('../lib/db.js');
const schema = db.schema;
const chai = require('chai');
const expect = chai.expect;

// Import the environment configuration values
const dotenv = require('dotenv');
dotenv.config();

// Create a new schema that accepts a 'name' object.
// 'name' is a required field
const testSchema = new schema({
  name: { type: String, required: true }
});
//Create a new collection called 'Name'
const Name = db.model('Name', testSchema);
describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    db.connect('test', console.error);
    const connection = db.connection;
    connection.on('error', console.error.bind(console, 'connection error'));
    connection.once('open', function() {
      console.log('We are connected to the test database!');
      done();
    });
  });
  describe('Test Database', function() {
    //Save object with 'name' value of 'Mike"
    it('New name saved to test database', function(done) {
      var testName = Name({
        name: 'Testie McTesterson'
      });
 
      testName.save(done);
    });
    it('Dont save incorrect format to database', function(done) {
      //Attempt to save with wrong info. An error should trigger
      var wrongSave = Name({
        notName: 'Not Testie McTesterson'
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });
    it('Should retrieve data from test database', function(done) {
      //Look up the 'Mike' object previously saved.
      Name.find({name: 'Testie McTesterson'}, (err, name) => {
        if(err) {throw err;}
        if(name.length === 0) {throw new Error('No data!');}
        done();
      });
    });
  });
  //After all tests are finished drop database and close connection
  after(function(done){
   db.connection.db.dropDatabase(function(){
      db.connection.close(done);
    });
  });
});