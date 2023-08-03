const express = require('express');
const serverless = require('serverless-http');
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('../public', express.static('public'));

const indexRouter = require('./index.js');
const singlePlayerRouter = require('./singlePlayerIndex.js');
const singlePlayerGameRouter = require('./singlePlayerGame.js');
const singlePlayerTurnRouter = require('./singlePlayerTurn.js');

const multiplayerRouter = require('./multiplayerIndex.js');
const multiplayerGameRouter = require('./multiplayerGame.js');
const multiplayerTurnRouter = require('./multiplayerTurn.js');

const roundResultRouter = require('./roundResult.js');
const singlePlayerGameResultRouter = require('./singlePlayerGameResult.js');

app.use('/', indexRouter);
app.use('/singleplayer', singlePlayerRouter);
app.use('/singleplayer/game', singlePlayerGameRouter);
app.use('/singleplayer/turn', singlePlayerTurnRouter);

app.use('/multiplayer', multiplayerRouter);
app.use('/multiplayer/game', multiplayerGameRouter);
app.use('/multiplayer/turn', multiplayerTurnRouter);

app.use('/roundresult', roundResultRouter);
app.use('/gameresult', singlePlayerGameResultRouter);


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
