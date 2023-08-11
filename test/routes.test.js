const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const Battle = require('../src/battle.js');

chai.use(chaiHttp);


describe('Routes tests', () => {

    describe('GET /', () => {
        it('should render the index view', async () => {
            const res = await chai.request(app).get('/');
            expect(res).to.have.status(200);
            expect(res.text).to.include('Rock, Paper, Scissors, Spock, Lizard!');
        });
    });

    describe('GET /singleplayer', () => {
        it('should render the singleplayer index view', async () => {
            const res = await chai.request(app).get('/singleplayer');
            expect(res).to.have.status(200);
            expect(res.text).to.include('Please enter your player name');
        });
    });

    describe('POST /singleplayer/game', () => {
        it('should setup a new singleplayer game', async () => {
            const res = await chai.request(app)
                .post('/singleplayer/game')
                .send({ playerName: 'Waluigi', noOfRounds: '2' });

            expect(res).to.have.status(200);
        });
    });


    describe('GET /singleplayer/game', () => {
        it('should render the singleplayer game view with correct details', async () => {
            const res = await chai.request(app).get('/singleplayer/game');
            expect(res).to.have.status(200);
            expect(res.text).to.include('Please choose a weapon to attack with');
        });
    });


    describe('GET /multiplayer', () => {
        it('should render the multiplayer index view', async () => {
            const res = await chai.request(app).get('/multiplayer');
            expect(res).to.have.status(200);
            expect(res.text).to.include('Please enter your names');
        });
    });

    describe('POST /multiplayer/game', () => {
        it('should setup a new multiplayer game', async () => {
            const res = await chai.request(app)
                .post('/multiplayer/game')
                .send({ playerName1: 'Waluigi', playerName2: 'Mario', noOfRounds: '2' });

            expect(res).to.have.status(200);
        });
    });


    describe('GET /multiplayer/game', () => {
        it('should render the singleplayer game view with correct details', async () => {
            const res = await chai.request(app).get('/multiplayer/game');
            expect(res).to.have.status(200);
            expect(res.text).to.include('Please choose a weapon to attack with');
        });
    });

    describe('GET /gameresult', () => {
        it('should render the game result view', async () => {
            const res = await chai.request(app).get('/gameresult');
            expect(res).to.have.status(200);
            expect(res.text).to.include('The winner is');
        });
    });


    describe('POST /singleplayer/turn', () => {
        it('should show the chosen weapon of each player', async () => {
            const res = await chai.request(app)
                .post('/singleplayer/turn')
                .send({ playerWeaponLink: '../public/assets/rock.png' });

            expect(res).to.have.status(200);
            expect(res.text).to.include('png');
            expect(res.text).to.include('chose');
        });
    });

    describe('POST /multiplayer/turn', () => {
        it('should show the prompt for next player', async () => {
            const res = await chai.request(app)
                .post('/multiplayer/turn')

            expect(res).to.have.status(200);
            expect(res.text).to.include('turn to choose');
        });
    });

    describe('POST /roundresult', () => {
        it('should show the prompt for next player', async () => {
            const res = await chai.request(app)
                .post('/roundresult')

            expect(res).to.have.status(200);
            expect(res.text).to.include('png');
            expect(res.text).to.include('chose');
        });
    });

})

