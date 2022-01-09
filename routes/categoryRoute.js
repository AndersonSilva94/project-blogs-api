const express = require('express');
const { categoryController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', verifyToken, categoryController.postCategory);
router.get('/', verifyToken, categoryController.getAll);

module.exports = router;
