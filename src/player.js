class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.weapon;
  }

  addPoint() {
    this.points += 1;
  }

  getPoints() {
    return this.points;
  }

  setWeapon(weapon) {
    this.weapon = weapon;
  }

  getWeapon() {
    return this.weapon;
  }
}

module.exports = Player;
