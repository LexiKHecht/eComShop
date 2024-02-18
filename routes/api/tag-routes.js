const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// /api

// find ALL + products
router.get('/', async (req, res) => {
try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    if (!tagData) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    }

    res.status(200).json(tagData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});
// find ONE by id + products
router.get('/:id', async (req, res) => {
try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagById) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    };

    res.status(200).json(tagById);

  } catch (err) {
    res.status(500).json(err);
  }
});
// create NEW tag
router.post('/', async (req, res) => {
try {
    const newTag = await Tag.create({
      tag_name: req.body.name
    });

    res.status(200).json({message: "Tag Added!"});
    console.log('Tag created!');

  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE ONE by id
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.name
    },
    {
      where: {
        id: req.params.id
      }
    });
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagById) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    };

    res.status(200).json({ message: "Tag Updated!" });
    console.log('Tag updated!');
    
  } catch (err) {
    res.status(500).json(err);
  }
});
// REMOVE ONE by id
router.delete('/:id', async (req, res) => {
 try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteTag) {
      res.status(404).json({message: 'Uh Oh!'});
      return;
    }

    res.status(200).json({ message: "Tag Removed!" });
    console.log('Tag deleted!');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
