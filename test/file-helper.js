const expect = require('chai').expect;
const fileHelper = require('../lib/file-helper');

describe('File Helper', function() {
  describe('fileHelper.getExtension()', function() {
    it('should return the the extension `jpg` from the string `test.jpg`', function(done) {
      var filename = 'test.jpg';
      var extension = fileHelper.getExtension(filename);;
      expect(extension).to.be.eql('jpg');
      done();
    });
  })
});