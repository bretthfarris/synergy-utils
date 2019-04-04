const expect = require('chai').expect;
const should = require('chai').should();
const aws = require('../lib/aws');
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const bucketName = 'synergy-test-bucket-' + uuidv4();
const filename = uuidv4() + '.txt';

describe('S3 API', function() {
  it('should create a public-read bucket called ' + bucketName, function(done) {
    var bucketParams = {
      "Bucket": bucketName,
      "ACL": "public-read"
    }
    aws.s3.createBucket(bucketParams, function(err, data) {
      should.equal(err, null);
      should.equal(data.Location, 'http://' + bucketName + '.s3.amazonaws.com/');
      done();
    });
  });
  it('should pull a list of all available buckets from s3', function(done) {
    aws.s3.listBuckets(function(err, data) {
      should.equal(err, null);
      expect(data.Buckets.length, 1).to.be.gt(0);
      done();
    });
  });
  it('should upload a test file ' + filename + ' into our bucket called ' + bucketName, function(done) {
    var uploadParams = {
      "Bucket": bucketName,
      "Key": filename,
      "Body": "test blah blah blah"
    };
    aws.s3.upload(uploadParams, function(s3Err, data) {
      should.equal(s3Err, null);
      done();
    });
  });
  it('should delete the test file ' + filename + ' from our bucket ' + bucketName, function(done) {
    var deleteParams = {
      "Bucket": bucketName,
      "Key": filename
    };
    aws.s3.deleteObject(deleteParams, function(err, data) {
      should.equal(err, null);
      done();
    });
  });
  it('should delete our test bucket called ' + bucketName, function(done) {
    aws.s3.deleteBucket({ "Bucket": bucketName }, function(err, data) {
      should.equal(err, null);
      done();
    });
  });
});