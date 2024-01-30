const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/catagory', async (req, res) => {
   try {
const catData = await Category.findAll({
      include: [{model: Product}]
    });

    if (!catData) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    };

    res.status(200).json(catData);

  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryById) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    };

    res.status(200).json(categoryById);

  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
