const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
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
// ask tutor
router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create({
      category_name: req.body.name
    })

    res.status(200).json({ message: "Category Added!" });
    console.log('Category added!')

  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  try {
    const updateCat = await Category.update({
      category_name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    });
    const catById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!catById) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    };

    res.status(200).json( {message: "Category Updated!" });
    console.log("Category updated!");

  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy(
      {
        where: {
          id: req.params.id,
        }
      });

      if (!deleteCategory) {
        res.status(404).json({message: 'Uh Oh!'});
        return;
      };

      res.status(200).json({message: "Category Removed!"});
      console.log('Category deleted!');

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
