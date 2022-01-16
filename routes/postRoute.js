const express = require('express');
const { postController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', verifyToken, postController.postUser);
router.get('/', verifyToken, postController.getAll);

module.exports = router;
