const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// /api

// find ALL + categories and tags
router.get('/', async (req, res) => {
 try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    if (!productData) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    }

    res.status(200).json(productData);

  } catch (err) {
    res.status(500).json(err);
  }
});
// find ONE by id + categories and tags
router.get('/:id', async (req, res) => {
try {
    const productById = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }]
    });
    if (!productById) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    }

    res.status(200).json(productById);

  } catch (err) {
    res.status(500).json(err);
  }
});

// create NEW product
router.post('/', (req, res) => {
  // product model input needs to include "tags": []
  Product.create(req.body)
    .then((product) => {
      // if input has tags, pair with new product
      if (req.body.tags.length) {
        const productTagIdArr = req.body.tags.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no tags
      res.status(200).json({ message: "Product Added!" });
    })
    .then((productTagIds) =>
      // if tags
      res.status(200).json({ message: "Product Added!" })
    )
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// UPDATE ONE by id
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tags && req.body.tags.length) {
        
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // adding and removing tags
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tags
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

          const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
            .map(({ id }) => id);
          
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json({ message: "Product Updated!" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// REMOVE ONE by id
router.delete('/:id', async (req, res) => {
try {
    const deleteProd = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteProd) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    }

    res.status(200).json({ message: "Product Removed!" });
    console.log("Product deleted!");
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
