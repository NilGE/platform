import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  local : {
    username: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
  }
});

export default mongoose.model('User', userSchema);
