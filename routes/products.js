var express = require('express'),
    router  = express.Router();

var ProductController = require('../controllers/ProductController');

router.route('/')
  .get(ProductController.getAll.bind(ProductController))
  .post(ProductController.create.bind(ProductController));

router.route('/:_id')
  .get(ProductController.getById.bind(ProductController))
  .put(ProductController.update.bind(ProductController))
  .delete(ProductController.delete.bind(ProductController));

module.exports = router;
