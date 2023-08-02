const express = require('express');
const router = express.Router();
const Battle = require('./battle.js');
const Player = require('./player.js');

router.post('/', (req, res) => {
  const battle = new Battle();
  const names = [req.body.playerName];
  battle.setup(names);
  req.app.locals.battle = battle;

  res.redirect('/game');
})

router.get('/', (req, res) => {
  const player = req.app.locals.battle.currentPlayer();

  res.render('game', {
    name: player.name,
    health: player.health
  });
})

module.exports = router;
