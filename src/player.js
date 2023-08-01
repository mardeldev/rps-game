class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  takeDamage(amount) {
    this.health -= amount;
  }
}

module.exports = Player;
