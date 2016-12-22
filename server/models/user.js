import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userLocalSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {collection: "userLocal"});

export default mongoose.model('User', userLocalSchema);
