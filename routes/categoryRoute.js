const express = require('express');
const { categoryController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', verifyToken, categoryController.postCategory);

module.exports = router;
