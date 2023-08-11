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

    it('should be able to determine the winner through random attack', () => {
        battle.attack('rock');
        battle.attack('scissors');
        expect(battle.getWinner()).to.be.oneOf(['Zelda', 'Bowser', 'a draw']);
    })
    it('should be able to determine the other winner through random attack', () => {
        battle.attack('rock');
        battle.attack('paper');
        expect(battle.getWinner()).to.be.oneOf(['Zelda', 'Bowser', 'a draw']);
    })
    it('should be able to determine the winner', () => {
        battle.currentPlayer().addPoint();
        expect(battle.getWinner()).to.be.oneOf(['Zelda', 'Bowser', 'a draw']);
    })
    it('should be able to determine the other winner', () => {
        battle.otherPlayer().addPoint();
        expect(battle.getWinner()).to.be.oneOf(['Zelda', 'Bowser', 'a draw']);
    })

    it('should set a valid weapon for the computer', () => {
        battle.setComputerWeapon();
        expect(['rock', 'paper', 'scissors', 'spock', 'lizard']).to.include(battle.getComputerWeapon());
    });

    it('should determine a draw', () => {
        battle.currentPlayer().setWeapon('rock');
        battle.otherPlayer().setWeapon('rock');
        battle.currentPlayer().addPoint();
        battle.otherPlayer().addPoint();
        expect(battle.getWinner()).to.equal('a draw');
    });
    it('should reset play counter', () => {
        battle.resetPlayCounter()
        expect(battle.playCounter).to.equal(1);
    });

    describe('allocatePoint method', () => {
        it('should handle rock vs scissors', () => {
            battle.currentPlayer().setWeapon('rock');
            battle.otherPlayer().setWeapon('scissors');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('scissors');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle rock vs lizard', () => {
            battle.currentPlayer().setWeapon('rock');
            battle.otherPlayer().setWeapon('lizard');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('lizard');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle rock vs spock', () => {
            battle.currentPlayer().setWeapon('rock');
            battle.otherPlayer().setWeapon('spock');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('spock');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle rock vs paper', () => {
            battle.currentPlayer().setWeapon('rock');
            battle.otherPlayer().setWeapon('paper');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('paper');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle paper vs scissors', () => {
            battle.currentPlayer().setWeapon('paper');
            battle.otherPlayer().setWeapon('scissors');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('scissors');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle paper vs lizard', () => {
            battle.currentPlayer().setWeapon('paper');
            battle.otherPlayer().setWeapon('lizard');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('lizard');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle paper vs spock', () => {
            battle.currentPlayer().setWeapon('paper');
            battle.otherPlayer().setWeapon('spock');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('spock');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle scissors vs lizard', () => {
            battle.currentPlayer().setWeapon('scissors');
            battle.otherPlayer().setWeapon('lizard');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('lizard');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle scissors vs rock', () => {
            battle.currentPlayer().setWeapon('scissors');
            battle.otherPlayer().setWeapon('rock');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('rock');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle lizard vs spock', () => {
            battle.currentPlayer().setWeapon('lizard');
            battle.otherPlayer().setWeapon('spock');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('spock');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle lizard vs scissors', () => {
            battle.currentPlayer().setWeapon('lizard');
            battle.otherPlayer().setWeapon('scissors');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('scissors');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle spock vs scissors', () => {
            battle.currentPlayer().setWeapon('spock');
            battle.otherPlayer().setWeapon('scissors');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('scissors');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle spock vs rock', () => {
            battle.currentPlayer().setWeapon('spock');
            battle.otherPlayer().setWeapon('rock');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('rock');
            expect(battle.currentPlayer().getPoints()).to.equal(1);
        });
        it('should handle spock vs lizard', () => {
            battle.currentPlayer().setWeapon('spock');
            battle.otherPlayer().setWeapon('lizard');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('lizard');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
        it('should handle spock vs paper', () => {
            battle.currentPlayer().setWeapon('spock');
            battle.otherPlayer().setWeapon('paper');
            battle.allocatePoint();
            expect(battle.otherPlayer().getWeapon()).to.equal('paper');
            expect(battle.otherPlayer().getPoints()).to.equal(1);
        });
    })
})