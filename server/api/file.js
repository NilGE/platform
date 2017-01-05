import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: 'public/media/img/upload'});

router.post('/img/upload', upload.single('photos[]'), (req, res) => {
  res.status(201).send(req.file);
});

export default router;
