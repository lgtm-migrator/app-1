// var es = require('../lib/es.js');
require('env2')('.env');
var Code = require('code');
var Lab = require('lab');
var Server = require('../lib/index.js');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Code.expect;
var it = lab.test;

describe('/search/manuel/1', function () {

  it('returns specific search results', function (done) {

    Server.init(0, function (err, server) {

      expect(err).to.not.exist();

      server.inject('/search/manuel/1', function (res) {

        expect(res.statusCode).to.equal(200);
        server.stop(done);

      });
    });
  });

  it('returns specific search results', function (done) {

    Server.init(0, function (err, server) {

      expect(err).to.not.exist();

      server.inject('/search/manuel/15', function (res) {

        expect(res.statusCode).to.equal(200);
        server.stop(done);

      });
    });
  });
});
