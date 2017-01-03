import express from 'express';
// import User from '../models/user';
import Books from '../models/book';
// import Houses from '../models/house';
import userApi from './userApi';
import productApi from './product';
import authenticate from '../middlewares/authenticate';
import multer from 'multer';
import House from '../models/house';

const router = express.Router();
const upload = multer({ dest: 'public/media/img/upload'});
/*
User API
*/
router.use('/user', userApi);

/*
Book API
*/
router.get('/books', (req, res) => {
  Books.find({})
			//  .select('Title Price Author')
       .then(doc => res.send(doc))
       .catch(console.error);
});

router.post('/books', (req, res) => {
  new Books(req.body).save()
                     .then(doc => res.send(doc))
                     .catch(console.error);
});

/*
Event API
*/

router.post('/events', authenticate, (req, res) => {
  res.status(201).send({ success: true });
});

/*
Product API
*/
router.use('/product', productApi);

router.post('/img/upload', upload.single('photos[]'), (req, res) => {
  res.status(201).send(req.file);
});

export default router;
