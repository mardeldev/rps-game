class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  addPoint() {
    this.points += 1;
  }

  getPoints() {
    return this.points;
  }
}

module.exports = Player;
