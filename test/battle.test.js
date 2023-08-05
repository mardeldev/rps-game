const chai = require('chai');
const expect = chai.expect;
const Battle = require('../src/battle.js');

describe('Battle tests', () => {
    let battle;

    beforeEach(() => {
        battle = new Battle();
        battle.setup(['Zelda', 'Bowser'], 2);
    })

    it('should start at round 1', () => {
        expect(battle.getRound()).to.equal(1);
    })

    it('should have the correct number of rounds', () => {
        expect(battle.getNoOfRounds()).to.equal(2);
    })

})