const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');

router.post('/', (req, res) => {
  const battle = new Battle();
  const names = [req.body.playerName, 'Computer'];
  console.log(req.body);
  battle.setup(names);
  req.app.locals.battle = battle;

  res.redirect('/singleplayer/game');
})

router.get('/', (req, res) => {
  const player = req.app.locals.battle.currentPlayer();

  res.render('singleplayergame', {
    name: player.name,
    health: player.health
  });
})

module.exports = router;
