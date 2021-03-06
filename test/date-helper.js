var expect = require('chai').expect;
var format = require('../lib/date-helper.js').format;

describe('Date', function() {
  describe('dateHelper.format()', function() {
    it('should format a given date into a standard format', function() {
      var date1 = "March 8, 1984";
      var date2 = format('1984-03-08 12:00:00');
      expect(date2).to.be.equal(date1);
    });
  });
});

