const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const battle = req.app.locals.battle;
    const currentPlayer = battle.currentPlayer();
    const otherPlayer = battle.otherPlayer();

    currentPlayer.setWeapon(req.body.weapon);



    let continueURL;
    let screenMsg;

    if (battle.getPlayCounter() == 1) {
        req.app.locals.playCounter = battle.getPlayCounter();
        battle.iteratePlayCounter();
        continueURL = '/multiplayer/game';
        screenMsg = (`${otherPlayer.name}'s turn to choose`)
        battle.switch();

    } else if (battle.getPlayCounter() == 2 && battle.getRound() <= battle.getNoOfRounds()) {
        battle.resetPlayCounter();
        screenMsg = "See who won this round:"
        continueURL = '/roundresult';
    }


    res.render('multiplayerturn', {
        currentPlayer: currentPlayer,
        otherPlayer: otherPlayer,
        continueURL: continueURL,
        screenMsg: screenMsg
    });


})

module.exports = router;
