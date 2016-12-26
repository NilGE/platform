import express from 'express';
import User from '../server/models/user';
import Books from '../server/models/book';
import signupValidation from '../server/shared/validations/signup';
import isEmpty from 'lodash/isEmpty';
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

const validateInput = (data, validation) => {
	let { errors } = validation(data);
	return User.findOne().or([{ 'username': data.username },  {'email': data.email }])
						 .then(user => {
							 if (user) {
								 if (user.username === data.username) {
									 console.log(user.username);
									 errors.username = 'There is user with such User Name';
								 }
								 if (user.email === data.email) {
									 console.log(user.email);
									 errors.email = "There is user with such Email";
								 }
							 }
							 return {
					 			errors,
					 			isValid: isEmpty(errors)
					 		};
						 });
};

router.post('/addUser', (req, res) => {
	validateInput(req.body, signupValidation).then(({ errors, isValid }) => {
		if (!isValid) {
			res.status(400).send(errors);
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
