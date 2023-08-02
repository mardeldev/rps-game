const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');

router.post('/', (req, res) => {

    let playCounter = 0;


    if (!req.app.locals.playCounter) {
        let names = ['Pingu', 'Yoda'];
        if (req.body.playerName1 != '') { names[0] = req.body.playerName1 };
        if (req.body.playerName2 != '') { names[1] = req.body.playerName2 };

        const battle = new Battle();
        let noOfRounds = parseInt(req.body.noOfRounds);

        battle.setup(names, noOfRounds);




        console.log('IM RUNNING THISSSSS');

        req.app.locals.battle = battle;


        res.redirect('/multiplayer/game')

    }

    res.redirect('/multiplayer/game')


})


router.get('/', (req, res) => {
    const player = req.app.locals.battle.currentPlayer();
    const round = req.app.locals.battle.getRound();
    const rounds = req.app.locals.battle.getNoOfRounds();

    res.render('multiplayergame', {
        name: player.name,
        round: round,
        rounds: rounds
    });
})

module.exports = router;
