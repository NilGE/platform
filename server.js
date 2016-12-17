import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';
// import apiRouter from './api/index';

const server = express();

server.use(bodyParser.json());

server.set('view engine', 'ejs');

// server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.render('index', {
    content: 'dummy content'
  });
});

server.listen(config.port, config.host, () => {
  console.info('Magic happen on port ', config.port);
});
