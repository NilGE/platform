import express from 'express';
import User from '../server/models/user';
const router = express.Router();

router.get('/', (req, res) => {
	res.send({data: []});
});

router.get('/user/:username', (req, res) => {
  User.findOne({ 'local.username': req.params.username})
      .then(doc => res.send({ userinfo: doc }))
      .catch(console.error);
});

export default router;
