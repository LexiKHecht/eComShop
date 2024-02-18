const { Category } = require('../models');

const categoryData = [
  {
    category_name: "Necessities",
  },
  {
    category_name: "Runes",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Bulk",
  },
  {
    category_name: "Pants",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
