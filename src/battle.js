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
    this.playCounter = 1;
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

  getPlayCounter() {
    return this.playCounter;
  }

  getPlayerWeapon() {
    return this.playerWeapon;
  }

  iterateRound() {
    this.currentRound += 1;
  }

  iteratePlayCounter() {
    this.playCounter += 1;
  }

  attack(weapon) {
    this.setPlayerWeapon(weapon);
    this.setComputerWeapon();
    return this.allocatePoint();
  }

  setPlayerWeapon(weapon) {
    this.currentPlayer().setWeapon(weapon);
    this.playerWeapon = this.currentPlayer().getWeapon();
  }

  resetPlayCounter() {
    this.playCounter = 1;
  }

  setComputerWeapon() {
    this.otherPlayer().setWeapon(weapons[(Math.floor(Math.random() * 5))]);
    this.computerWeapon = this.otherPlayer().getWeapon();
    console.log(this.computerWeapon);
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
    if (this.currentPlayer().getWeapon() === this.otherPlayer().getWeapon()) {
      this.iterateRound()
      return "Draw";
    }

    switch (this.currentPlayer().getWeapon()) {
      case "rock":
        if (this.otherPlayer().getWeapon() === "scissors" || this.otherPlayer().getWeapon() === "lizard") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.currentPlayer().name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "paper":
        if (this.otherPlayer().getWeapon() === "rock" || this.otherPlayer().getWeapon() === "spock") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.currentPlayer().name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.players[1].name}`);
        }
      case "scissors":
        if (this.otherPlayer().getWeapon() === "paper" || this.otherPlayer().getWeapon() === "lizard") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.currentPlayer().name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.otherPlayer().name}`);
        }
      case "lizard":
        if (this.otherPlayer().getWeapon() === "spock" || this.otherPlayer().getWeapon() === "paper") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.currentPlayer().name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.otherPlayer().name}`);
        }
      case "spock":
        if (this.otherPlayer().getWeapon() === "scissors" || this.otherPlayer().getWeapon() === "rock") {
          this.currentPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.currentPlayer().name}`);
        } else {
          this.otherPlayer().addPoint();
          this.iterateRound()
          return (`Point goes to: ${this.otherPlayer().name}`);
        }
      default:
        return "Invalid input";
    }
  }
}

module.exports = Battle;