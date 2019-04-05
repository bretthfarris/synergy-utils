const expect = require('chai').expect;
const urlHelper = require('../lib/url-helper');

describe('URL Helper', function() {
  describe('urlHelper.getFilename()', function() {
    it('should return the filename from the url', function(done) {
      var testUrl = 'http://www.domain.com/filename.txt';
      var filename = urlHelper.getFilename(testUrl);
      expect(filename).to.be.eql('filename.txt');
      done();
    });
  });
  describe('urlHelper.getSubdomain()', function() {
    it('should return the subdomain from the url', function(done) {
      var testUrl = 'http://test.somedomain.com';
      var subdomain = urlHelper.getSubdomain(testUrl);
      expect(subdomain).to.be.eql('test');
      done();
    });
  })
});