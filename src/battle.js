const Player = require('./player.js');
const weapons = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

class Battle {
  setup(names, noOfRounds, playerClass = Player) {
    this.players = names.map(name => new playerClass(name));
    this.currentRound = 1;
    this.noOfRounds = noOfRounds;
    this.playerWeapon;
    this.computerWeapon;
    this.finalScore = [];
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

  getRound() {
    return this.currentRound;
  }

  getNoOfRounds() {
    return this.noOfRounds;
  }

  iterateRound() {
    this.currentRound += 1;
  }

  attack(weapon) {
    this.setPlayerWeapon(weapon);
    this.setComputerWeapon();
    return this.allocatePoint();
  }

  setPlayerWeapon(weapon) {
    this.playerWeapon = weapon;
  }

  getPlayerWeapon() {
    return this.playerWeapon;
  }

  setComputerWeapon() {
    this.computerWeapon = weapons[(Math.floor(Math.random() * 5))];
  }

  getComputerWeapon() {
    return this.computerWeapon;
  }

  getWinner() {
    if (this.currentPlayer().getPoints() > this.otherPlayer().getPoints()) {
      return this.currentPlayer().name;
    } else if (this.otherPlayer().getPoints() > this.currentPlayer().getPoints()) {
      return this.otherPlayer().name;
    } else if (this.currentPlayer().getPoints() == this.otherPlayer().getPoints()) {
      return 'a draw';
    }
  }



  allocatePoint() {
    if (this.playerWeapon === this.computerWeapon) {
      this.iterateRound()
      return "Draw";
    }

    switch (this.playerWeapon) {
      case "rock":
        if (this.computerWeapon === "scissors" || this.computerWeapon === "lizard") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[0].name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "paper":
        if (this.computerWeapon === "rock" || this.computerWeapon === "spock") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[0].name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "scissors":
        if (this.computerWeapon === "paper" || this.computerWeapon === "lizard") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[0].name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "lizard":
        if (this.computerWeapon === "spock" || this.computerWeapon === "paper") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[0].name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "spock":
        if (this.computerWeapon === "scissors" || this.computerWeapon === "rock") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[0].name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      default:
        return "Invalid input";
    }
  }
}

module.exports = Battle;