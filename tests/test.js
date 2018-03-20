'use strict'

var chai = require('chai');
var chaiHttp = require('chai-http');

var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

		chai.request(server).get('/')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});