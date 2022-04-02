import express from 'express';
import config from 'config';
import routes from './routes';
import bodyParser from 'body-parser';
import db from './db';
const app = express();

const port = config.get('port');

//parse application/json
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log(`Application listening at http://localhost:${port}`);
  db();
  routes(app);
});
