const { Product } = require('../models');

const productData = [
  {
    product_name: "Glass of Pool Water",
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Ominous Ball",
    price: 90.0,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: "My Grandpa's hat",
    price: 22.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: "190lb Bag of Pink Glitter",
    price: 169.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: "Cargo Shorts",
    price: 25.99,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
