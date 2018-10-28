/* eslint no-console: 0 */

const app = require('express')();
const mongoose = require('mongoose');
const middleware = require('./middleware');
const router = require('./router');

mongoose.connect('mongodb://localhost/notes', { useNewUrlParser: true });
mongoose.connection
  .once('open', () => console.log('Connected to Mongo.'))
  .on('error', console.error.bind(console, 'connection error:'));

app.use(middleware);
app.use('/', router);

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}.`));
