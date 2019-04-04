const expect = require('chai').expect;
const urlHelper = require('../lib/url-helper');

describe('URL Helper', function() {
  describe('urlHelper.getSubdomain()', function() {
    it('should return the the subdomain `test` from the url `http://test.somedomain.com`', function(done) {
      var testUrl = 'http://test.somedomain.com';
      var subdomain = urlHelper.getSubdomain(testUrl);
      expect(subdomain).to.be.eql('test');
      done();
    });
  })
});