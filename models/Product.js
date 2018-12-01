const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  category: { type: String, required: true, index: true },
  name: { type: String, required: true },
  container: { type: String, required: true },
  metric: { type: String, default: "" },
  count: { type: Number, required: true },
  notes: { type: String, default: "" }
});

mongoose.model('products', productSchema);