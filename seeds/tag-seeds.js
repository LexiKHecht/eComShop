const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'room temp',
  },
  {
    tag_name: 'smells like chlorine',
  },
  {
    tag_name: 'sparkly',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'heavy',
  },
  {
    tag_name: 'pink',
  },
  {
    tag_name: 'white',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
