 import jwt from 'jsonwebtoken';
 import { jwtSecret } from '../../config/config';
 import User from '../models/user';

 export default (req, res, next) => {
   const authorizationHeader = req.headers['authorization'];
   let token;
   if (authorizationHeader) {
     token = authorizationHeader.split(' ')[1];
   }

   if (token) {
     jwt.verify(token, jwtSecret, (err, decoded) => {
       if (err) {
         res.status(401).send({ error: 'Failed to authenticate' });
       } else {
         User.findOne({ '_id': decoded.id})
             .select('_id username email').then(user => {
           if (!user) {
             res.status(404).send({ error: 'No such user' });
           } else {
             req.currentUser = user;
             next();
           }
         });
       }
     });
   } else {
     res.status(403).send({
       error: 'No token provided'
     });
   }
 };
