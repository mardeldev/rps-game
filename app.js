const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

const indexRouter = require('./routes/index.js');
const singlePlayerRouter = require('./routes/singlePlayerIndex.js');
const singlePlayerGameRouter = require('./routes/singlePlayerGame.js');
const singlePlayerTurnRouter = require('./routes/singlePlayerTurn.js');
const singlePlayerGameResultRouter = require('./routes/singlePlayerGameResult.js');
const gameRouter = require('./routes/game.js');
const turnRouter = require('./routes/turn.js');

app.use('/', indexRouter);
app.use('/singleplayer', singlePlayerRouter);
app.use('/singleplayer/game', singlePlayerGameRouter);
app.use('/singleplayer/turn', singlePlayerTurnRouter);
app.use('/gameresult', singlePlayerGameResultRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
