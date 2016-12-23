import mongoose from 'mongoose';
// import bcrypt from 'bcrypt-nodejs';

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  Title: { type: String, required: true, unique: true },
  Author: {type: String, required: true},
  Price: {type: Number, required: true}
}, {collection: 'books'});

export default mongoose.model('Books', booksSchema);
