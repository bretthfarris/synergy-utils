var expect = require('chai').expect;
var format = require('../lib/date.js').format;

describe('Date', function() {
  describe('date.format()', function() {
    it('should format a given date into a standard format', function() {
      var date1 = "March 8, 1984";
      var date2 = format('1984-03-08');
      expect(date2).to.be.equal(date1);
    });
  });
});

