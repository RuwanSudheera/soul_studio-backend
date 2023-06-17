const productService = require('../services/productService');


// Create a new product
exports.createProduct = async (req, res, next) => {
    try {
      const { name, price, description, stokeCount } = req.body;
      const productData = { name, price, description, stokeCount };
      const product = await productService.createProduct(productData);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

// Get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Get a single product
exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Update a product
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, description, stokeCount } = req.body;
    const productData = { name, price, description, stokeCount };
    const product = await productService.updateProduct(id, productData);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

// Delete a product
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};