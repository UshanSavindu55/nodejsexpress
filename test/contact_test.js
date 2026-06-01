'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the contact page', (done) => {
        chai.request(server)
            .get('/contact')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.text.should.contain('Contact Us');
                done();
            });
    });
});