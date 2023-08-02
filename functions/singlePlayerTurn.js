const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const battle = req.app.locals.battle;
  const currentPlayer = battle.currentPlayer();
  const otherPlayer = battle.otherPlayer();


  let roundWinner = battle.attack(req.body.weapon);
  let playerWeapon = battle.getPlayerWeapon();
  let computerWeapon = battle.getComputerWeapon();
  let playerWeaponLink = (`../public/assets/${playerWeapon}.png`);
  let computerWeaponLink = (`../public/assets/${computerWeapon}.png`);
  let continueURL;

  if (battle.getRound() <= battle.getNoOfRounds()) {
    // battle.switch();
    continueURL = '/singleplayer/game';
  } else if (battle.getRound() > battle.getNoOfRounds()) {
    continueURL = '/gameresult';
  }

  res.render('singleplayerturn', {
    currentPlayer: currentPlayer,
    otherPlayer: otherPlayer,
    chosenWeapon: playerWeapon,
    playerWeaponLink: playerWeaponLink,
    computerWeaponLink: computerWeaponLink,
    computerWeapon: computerWeapon,
    roundWinner: roundWinner,
    continueURL: continueURL
  });


})

module.exports = router;
