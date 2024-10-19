import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
});

export default model('Product', productSchema);
