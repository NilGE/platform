import express from 'express';
import userApi from './user';
import productApi from './product';
import mailApi from './mail';
import fileApi from './file';
import authenticate from '../middlewares/authenticate';

const router = express.Router();
/*
User API
*/
router.use('/user', userApi);

/*
Product API
*/
router.use('/product', productApi);

/*
Mail API
*/
router.use('/mail', mailApi);

/*
File API
*/
router.use('/file', fileApi);

/*
Event API
*/
router.post('/events', authenticate, (req, res) => {
  res.status(201).send({ success: true });
});

export default router;
