const Product = require('../models/productModel');


// Create a new product
exports.createProduct = async (productData) => {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      throw error;
    }
  };

// Get all products
exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
};

// Get a single product by ID
exports.getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

// Update a product
exports.updateProduct = async (productId, productData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, productData, { new: true });
    return product;
  } catch (error) {
    throw error;
  }
};

// Delete a product
exports.deleteProduct = async (productId) => {
  try {
    await Product.findByIdAndDelete(productId);
  } catch (error) {
    throw error;
  }
};