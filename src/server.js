const app = require('express')();
const mongoose = require('mongoose');
const middleware = require('./middleware');
const router = require('./router');

mongoose.connect('mongodb://localhost/notes');
// eslint-disable-next-line no-console
mongoose.connection.once('open', () => console.log('Connected to Mongo'));
// eslint-disable-next-line no-console
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const port = 3000;

app.use(middleware);
app.use('/', router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}.`));
