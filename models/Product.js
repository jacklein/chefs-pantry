const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  category: { type: String, required: true, index: true },
  name: { type: String, required: true },
  unit: {
    container: { type: String, required: true },
    amount: { type: Number, default: null },
    metric: { type: String, default: null }
  },
  count: { type: Number, required: true }
});

mongoose.model('products', productSchema);