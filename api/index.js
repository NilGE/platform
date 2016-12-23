import express from 'express';
import Validator from 'validator';
import User from '../server/models/user';
import Books from '../server/models/book';
import isEmpty from 'lodash/isEmpty';

const router = express.Router();

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

router.get('/books', (req, res) => {
	Books.find({})
			//  .select('Title Price Author')
			 .then(doc => res.send(doc))
			 .catch(console.error);
});

router.post('/books', (req, res) => {
	new Books(req.body).save()
										 .then(doc => res.send({ newBook: doc }))
										 .catch(console.error);
});

function validateInput(data) {
	let errors = {};
	if (Validator.isEmpty(data.username)) {
		errors.username = 'This field is required';
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = 'This field is required';
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = 'This field is required';
	}

	// if (Validator.isNull(data.passwordConfirmation)) {
	// 	errors.passwordConfirmation = 'This field is required';
	// }
	// if (!Validator.equals(data.password, data.passwordConfirmation)) {
	// 	errors.passwordConfirmation = 'Passwords must match';
	// }

	return {
		errors,
		isValid: isEmpty(errors)
	}
}

router.post('/addUser', (req, res) => {
	const { errors, isValid } = validateInput(req.body);
	if (!isValid) {
		res.status(404).json(errors);
	} else {
		new User(req.body).save()
											.then(doc => res.send({ userinfo: doc }))
					 						.catch(console.error);
	}
});

export default router;
