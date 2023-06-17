const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const productsRouter = require('./routes/products');
const errorHandler = require('./utils/errorHandler');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.use('/products', productsRouter);

app.use(errorHandler);

const PORT = 3006;

app.listen(PORT, () => {
  console.log('Server is running on port :', PORT);
});