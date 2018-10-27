import express from 'express';
import router from './router';

const app = express();

const port = 3000;

app.use('/', router);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port ${port}!`));
