const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = app => {
  app.route('/api/product')
    // await axios.post('/api/product', product)
    .post(async (req, res) => {
      const { category, name, container, metric, count, notes } = req.body;
      
      const product = new Product({
        category,
        name,
        container,
        metric,
        count,
        notes
      });

      try {
        await product.save();
        res.send(product);
      } catch (err) {
        res.status(400).send(err);
      }
    })

    // await axios.delete(`/api/product`, {data: {id: '1234'}})
    .delete(async (req, res) => {
      const { id } = req.body;

      Product.findOneAndDelete({
        _id: id
      }, (err, deletedProduct) => {
        if(err) return res.status(500).send(err);
        
        if(!deletedProduct) return res.status(404).send('file does not exist');

        const response = {
          message: 'Product successfully deleted',
          id: deletedProduct._id
        };
        return res.status(200).send(response);
      });
    });

  app.route('/api/products')
    // await axios.get('/api/products', {params: {category: 'produce'}})
    .get(async (req, res) => {
      const products = await Product.find({
        category: req.query.category
      })
        .sort({ createdAt: 1 });

      res.send(products);
    })
};