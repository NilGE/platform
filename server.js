import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/config';
import apiRouter from './api/index';

const server = express();


// MongoDB Connection
mongoose.connect(config.mongodbUri, (error) => {
  if (error) {
    console.error('lease make sure Mongodb is installed and running!');
    throw error;
  }
});

server.use(bodyParser.json());
server.set('view engine', 'ejs');

server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('*', (req, res) => {
  res.render('index', {
    content: 'dummy content'
  });
});

server.listen(config.port, config.host, () => {
  console.info('Magic happen on port ', config.port);
});
