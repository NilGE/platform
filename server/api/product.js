import express from 'express';
// import authenticate from '../middlewares/authenticate';
import House from '../models/house';
const router = express.Router();

router.post('/house/addHouse', (req, res) => {
  new House(req.body).save()
                     .then(doc => res.send(doc))
                     .catch(console.error);
});

router.get('/house/getAll', (req, res) => {
  House.find({})
			//  .select('Title Price Author')
       .then(doc => res.send(doc))
       .catch(console.error);
});

export default router;
