const chai = require('chai');
const expect = chai.expect;
const Player = require('../src/player.js');

describe('Player tests', () => {
    let player;

    beforeEach(() => {
        player = new Player('Thanos');
    })

    it('should have a name', () => {
        expect(player.name).to.equal('Thanos');
    })

    it('should start with 0 points', () => {
        expect(player.getPoints()).to.equal(0);
    })

})