import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  address1: {type: String, required: true},
  address2: {type: String},
  bathroom: {type: Number, required: true},
  bedroom: {type: Number, required: true},
  size: {type: Number},
  facilities: {type: Array},
  price: {type: Number, required: true},
  commons: {type: String},
  createAt: {type: Date, required: true}
}, {collection: 'house'});


export default mongoose.model('House', houseSchema);
