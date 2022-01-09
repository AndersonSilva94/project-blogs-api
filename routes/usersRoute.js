const express = require('express');
const { usersController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', usersController.postUser);
router.get('/', verifyToken, usersController.getAll);

module.exports = router;
