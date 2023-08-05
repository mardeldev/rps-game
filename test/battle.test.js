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

    it('should be able to have and access two players', () => {
        expect(battle.currentPlayer().name).to.equal('Zelda');
        expect(battle.otherPlayer().name).to.equal('Bowser');
    })

    it('should be able to switch players', () => {
        battle.switch();
        expect(battle.currentPlayer().name).to.equal('Bowser');
        expect(battle.otherPlayer().name).to.equal('Zelda');
    })

    it('should be able to attack', () => {
        battle.attack('lizard');
        expect(battle.getRound()).to.equal(2);
    })

})