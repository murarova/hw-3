const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.param('id', productController.checkId);

// router.route(/\/\?ids=([^\/]+?)\/?$/i).get(productController.getFewProducts);
router.route('/').get(productController.getAllProducts);
router.route('/:id').get(productController.getProduct);

module.exports = router;
