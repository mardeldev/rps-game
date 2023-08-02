const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const battle = req.app.locals.battle;
    const currentPlayer = battle.currentPlayer();
    const otherPlayer = battle.otherPlayer();



    let roundWinner = battle.allocatePoint();
    let playerWeapon = battle.currentPlayer().getWeapon();
    let otherPlayerWeapon = battle.otherPlayer().getWeapon();
    let playerWeaponLink = (`../public/assets/${playerWeapon}.png`);
    let otherPlayerWeaponLink = (`../public/assets/${otherPlayerWeapon}.png`);
    let continueURL;

    if (battle.getRound() <= battle.getNoOfRounds()) {
        continueURL = '/multiplayer/game';
    } else if (battle.getRound > battle.getNoOfRounds) {
        continueURL = '/gameresult';
    }







    res.render('roundresult', {
        currentPlayer: currentPlayer,
        otherPlayer: otherPlayer,
        chosenWeapon: playerWeapon,
        otherPlayerWeapon: otherPlayerWeapon,
        playerWeaponLink: playerWeaponLink,
        otherPlayerWeaponLink: otherPlayerWeaponLink,
        roundWinner: roundWinner,
        continueURL: continueURL
    });


})

module.exports = router;
