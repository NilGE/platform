import express from 'express';
// import authenticate from '../middlewares/authenticate';
import House from '../models/house';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: 'public/media/img/upload'});

router.post('/house/addOne', (req, res) => {
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

router.get('/house/getOne/:_id', (req, res) => {
  House.findOne({ '_id': req.params._id})
       .then(house => res.send(house))
       .catch(console.error)

  House.find({})
			//  .select('Title Price Author')
       .then(doc => res.send(doc))
       .catch(console.error);
});

export default router;
