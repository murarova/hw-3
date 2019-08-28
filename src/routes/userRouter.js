const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.param('id', usersController.checkId);

router.route('/').post(usersController.addUser);
router.route('/:id').get(usersController.getUser);

module.exports = router;
