const Player = require('./player.js');

class Battle {
  setup(names, playerClass = Player) {
    this.players = names.map(name => new playerClass(name));
  }

  currentPlayer() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[1];
  }

  switch() {
    this.players.reverse();
  }

  turn() {
    this.otherPlayer().takeDamage(10);
  }
}

module.exports = Battle;