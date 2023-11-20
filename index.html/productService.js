const { Product } = require('../Dao/dao');

const productService = {
  getAllProducts: async () => {
    return await Product.find();
  },
  // Otros métodos para gestionar productos
};

module.exports = productService;
