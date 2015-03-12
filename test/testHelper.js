var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

global.chai = chai;
global.expect = expect;

function mockRequest() {
  return {
    params: {},
    query: {},
    body: ''
  };
}
exports.mockRequest = mockRequest;

function mockResponse() {
  var response = {};
  response.status = sandbox.stub().returns(response);
  response.json = function(data) {
    response.body = data;
    return response;
  };
  response.end = sandbox.stub().returns(response);
  return response;
}
exports.mockResponse = mockResponse;

var sandbox = sinon.sandbox.create();
exports.sandbox = sandbox;

beforeEach(function() {
  sandbox.restore();
});

