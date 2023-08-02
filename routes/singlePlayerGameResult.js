const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const battle = req.app.locals.battle;
  const currentPlayer = battle.currentPlayer();
  const otherPlayer = battle.otherPlayer();

  const winner = battle.getWinner();
  res.render('gameresult', {
    currentPlayer: currentPlayer,
    otherPlayer: otherPlayer,
    winner: winner
  })


})

module.exports = router;
