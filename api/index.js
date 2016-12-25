import express from 'express';
import User from '../server/models/user';
import Books from '../server/models/book';
import validateInput from '../server/shared/validations/signup';

const router = express.Router();

/*
User API
*/
router.get('/users', (req, res) => {
	User.find({})
			.select('username email')
			.then(doc => res.send(doc))
			.catch(console.error);
});

router.get('/user/:username', (req, res) => {
  User.findOne({ 'username': req.params.username})
      .then(doc => res.send({ userinfo: doc }))
      .catch(console.error);
});

router.post('/addUser', (req, res) => {
	const { errors, isValid } = validateInput(req.body);
	if (!isValid) {
		res.status(400).json(errors);
	} else {
		const { username, password, email } = req.body;
		var newUser = new User();
		newUser.username = username;
		newUser.email = email;
		newUser.password = newUser.generateHash(password);
		newUser.save().then(doc => res.send({ userinfo: doc }))
					 				.catch(err => res.status(500).send({ error : err }))
	}
});

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

export default router;
