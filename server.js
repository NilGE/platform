import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/config';
import apiRouter from './api/index';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const app = express();


// MongoDB Connection
mongoose.Promise = global.Promise;

mongoose.connect(config.mongodbUri, (error) => {
  if (error) {
    console.error('lease make sure Mongodb is installed and running!');
    throw error;
  }
});

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/api', apiRouter);
app.use(express.static('public'));

app.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

app.get('*', (req, res) => {
  res.render('index', {
    content: 'dummy content'
  });
});

app.listen(config.port, config.host, () => {
  console.info('Magic happens at port ', config.port);
});
