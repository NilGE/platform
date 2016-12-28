import express from 'express';
import authenticate from '../middlewares/authenticate';
const router = express.Router();

router.post('/house/addHouse', (req, res) => {
	res.status(201).send(req.body);
});

export default router;
