import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const userLocalSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {collection: "userLocal"});

// methods ======================
// generating a hash
userLocalSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userLocalSchema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', userLocalSchema);
