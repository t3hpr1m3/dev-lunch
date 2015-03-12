var testHelper = require('../testHelper'),
    time = require('../../routes/time');

describe('time', function() {

  var req,
      resp,
      next;

  beforeEach(function() {
    req = testHelper.mockRequest;
    resp = testHelper.mockResponse;
    next = testHelper.sandbox.stub();
  });

  describe('middleware', function() {
    describe('#checkToken', function() {
      context('with an invalid token', function() {
        it('responds with 401', function(done) {
          expect(res)
          middleware.checkToken(req, res, next);
          done();
        });
      });

      context('with a valid token', function() {
        it('calls #next', function(done) {
          done();
        });
      });
    });
  });

  describe('routes', function() {
  });
});
