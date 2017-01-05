import express from 'express';
import User from '../models/user';
import signupValidation from '../shared/validations/signup';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../config/config';
import authenticate from '../middlewares/authenticate';

const router = express.Router();

/*
get all users username and email
*/
router.get('/users', authenticate, (req, res) => {
	User.find({})
			.select('username email')
			.then(doc => res.send(doc))
			.catch(console.error);
});

/*
user signup
*/

const validateInput = (data, validation) => {
	let { errors } = validation(data);
	return User.findOne().or([{ 'username': data.username },  {'email': data.email }]).then(user => {
		 if (user) {
			 if (user.username === data.username) {
				 console.log(user.username);
				 errors.username = 'There is user with such Username';
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

router.post('/signup', (req, res) => {
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
user authentication
*/
router.post('/auth', (req, res) => {
	const { identifier, password } = req.body;
	User.findOne().or([{ 'username': identifier },  {'email': identifier }])
			.then(user => {
				if (user) {
					if (user.validPassword(password)) {
						const token = jwt.sign({
							id: user._id,
							username: user.username
						}, jwtSecret);
						res.send({ token });
					} else {
						res.status(401).send({ errors: {form: 'Invalid Credentials'} });
					}
				} else {
					res.status(401).send({ errors: {form: 'Invalid Credentials'} });
				}
			});
});

export default router;
