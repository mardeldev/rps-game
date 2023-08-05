const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}` });
let port = process.env.PORT;
let host = process.env.HOST;
if (port == null || port == "") {
  port = 8000;
}

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

const indexRouter = require('./routes/index.js');
const singlePlayerRouter = require('./routes/singlePlayerIndex.js');
const singlePlayerGameRouter = require('./routes/singlePlayerGame.js');
const singlePlayerTurnRouter = require('./routes/singlePlayerTurn.js');

const multiplayerRouter = require('./routes/multiplayerIndex.js');
const multiplayerGameRouter = require('./routes/multiplayerGame.js');
const multiplayerTurnRouter = require('./routes/multiplayerTurn.js');

const roundResultRouter = require('./routes/roundResult.js');
const gameResultRouter = require('./routes/gameResult.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');

app.use('/', indexRouter);
app.use('/singleplayer', singlePlayerRouter);
app.use('/singleplayer/game', singlePlayerGameRouter);
app.use('/singleplayer/turn', singlePlayerTurnRouter);

app.use('/multiplayer', multiplayerRouter);
app.use('/multiplayer/game', multiplayerGameRouter);
app.use('/multiplayer/turn', multiplayerTurnRouter);

app.use('/roundresult', roundResultRouter);
app.use('/gameresult', gameResultRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

app.listen(port, host, () => {

  console.log(`Rock Paper Scissors Spock Lizard app listening on http://${host}:${port}`)
});
