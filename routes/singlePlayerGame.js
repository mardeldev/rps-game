const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');

router.post('/', (req, res) => {

  const battle = new Battle();
  const names = [];
  let noOfRounds;
  noOfRounds = parseInt(req.body.noOfRounds);

  req.app.locals.battle = battle;

  req.body.playerName == '' ? names.push('Pingu', 'Computer') : names.push(req.body.playerName, 'Computer');

  battle.setup(names, noOfRounds);
  res.redirect('/singleplayer/game');
})

router.get('/', (req, res) => {
  const player = req.app.locals.battle.currentPlayer();
  const round = req.app.locals.battle.getRound();
  const rounds = req.app.locals.battle.getNoOfRounds();

  res.render('singleplayergame', {
    name: player.name,
    round: round,
    rounds: rounds
  });
})

module.exports = router;
