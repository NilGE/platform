import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  address1: {type: String, required: true},
  address2: {type: String},
  bathroom: {type: Number, required: true},
  bedroom: {type: Number, required: true},
  size: {type: Number},
  facilities: {type: Array},
  photos: {type: Array},
  price: {type: Number, required: true},
  comments: {type: String},
  createAt: {type: Date}
}, {collection: 'house'});


export default mongoose.model('House', houseSchema);
