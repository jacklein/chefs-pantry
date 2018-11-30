const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Product');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require('./routes/productRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);