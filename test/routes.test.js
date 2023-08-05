const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe('Routes tests', () => {
    describe('POST /', () => {
        it('should setup a new game', async () => {
            const res = await chai.request(app)
                .post('/singleplayer/game')
                .send({ playerName: 'Waluigi', noOfRounds: '2' })

            expect(res).to.have.status(200);
        });


    })



})