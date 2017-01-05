import express from 'express';
// import authenticate from '../middlewares/authenticate';
import House from '../models/house';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: 'public/media/img/upload'});

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

router.post('/img/upload', upload.single('photos[]'), (req, res) => {
  res.status(201).send(req.file);
});

export default router;
