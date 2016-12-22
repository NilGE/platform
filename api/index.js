import express from 'express';
import User from '../server/models/user';
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

router.post('/addUser', (req, res) => {
	new User(req.body).save()
										.then(doc => res.send({ userinfo: doc }))
				 						.catch(console.error);
});

export default router;
