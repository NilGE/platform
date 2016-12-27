import express from 'express';
import User from '../models/user';
import Books from '../models/book';
import userApi from './userApi';
import authenticate from '../middlewares/authenticate';
const router = express.Router();

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
Event AP
*/

router.post('/events', authenticate, (req, res) => {
	res.status(201).send({ success: true });
});

export default router;
