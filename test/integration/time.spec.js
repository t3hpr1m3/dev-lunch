var app = require('../../app'),
    request = require('supertest'),
    testHelper = require('../testHelper');

describe('Time thing', function() {

  it('requires a valid token', function(done) {
    request(app)
      .get('/')
      .query({ token: 'NOTSEKRET' })
      .expect(401, done);
  });

  it('returns the current time', function(done) {
    request(app)
      .get('/')
      .query({ token: 'SEKRET' })
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('currentTime');
        done();
      })
  });
});
