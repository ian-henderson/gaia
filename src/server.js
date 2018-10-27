import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware';
import router from './router';

mongoose.connect('mongodb://localhost/notes');
// eslint-disable-next-line no-console
mongoose.connection.once('open', () => console.log('Connected to Mongo'));
// eslint-disable-next-line no-console
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const app = express();

const port = 3000;

app.use(middleware);
app.use('/', router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}.`));
