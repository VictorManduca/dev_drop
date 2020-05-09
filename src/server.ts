import express from 'express';
import dotenv from 'dotenv';

const app: express.Application = express();
dotenv.config();

const port = process.env.PORT;

console.log(port)

app
  .get('/', function (req, res) {
    res.send('Hello World');
  });

app
  .listen(port, function (err) {
    if (err)
      return console.error(err);

    console.log('Example app listening on port %s', port);
  });