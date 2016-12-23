import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config/config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  db.collection('users').insertMany([
    { id: 102, Email: 'gxy2@gmail.com', Name: 'Neil2'},
    { id: 103, Email: 'gxy3@gmail.com', Name: 'Neil3'},
    { id: 104, Email: 'gxy4@gmail.com', Name: 'Neil4'},
  ]).then(response => {
    console.info('users', response.insertedCount);
    db.close();
  });
  // db.collection('books').insertMany([
  //   { id: 1, Title: 'Business/Company', Author: 'Cognitive Building Bricks',
  //     Price: 100,
  //     Year: 2011 },
  //   { id: 2, Title: 'aaa', Author: 'xxx',
  //     Price: 200,
  //     Year: 2012 },
  //   { id: 3, Title: 'bbb', Author: 'yyy',
  //     Price: 300,
  //     Year: 2013 },
  //   { id: 4, Title: 'ccc', Author: 'zzz',
  //     Price: 400,
  //     Year: 2014 },
  // ]).then(response => {
  //   console.info('books', response.insertedCount);
  //   db.close();
  // });
});
