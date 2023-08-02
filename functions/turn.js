const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const battle = req.app.locals.battle;
  battle.turn();
  const currentPlayer = battle.currentPlayer();
  const otherPlayer = battle.otherPlayer();
  battle.switch();

  res.render('turn', {
    currentPlayer: currentPlayer,
    otherPlayer: otherPlayer
  });
})

module.exports = router;
