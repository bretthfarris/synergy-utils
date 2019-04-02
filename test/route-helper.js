const expect = require('chai').expect;
const should = require('chai').should();
const routeHelper = require('../lib/route-helper');

describe('Route Helper', function() {
  describe('routeHelper.filterParamsByObjectProperties()', function() {
    it('should strip all parameters except for the ones that exist as properties of the filterObject', function() {
      var params = { "test1": "test1", "test2": "test2", "test3": "test3" };
      var filterObject = { "test2": "SomeValue" };
      var filteredParams = routeHelper.filterParamsByObjectProperties(params, filterObject);
      should.equal(filteredParams.test1, undefined);
      should.equal(filteredParams.test2, "test2");
      should.equal(filteredParams.test3, undefined);
    });
  });
});