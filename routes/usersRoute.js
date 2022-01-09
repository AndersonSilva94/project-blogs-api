const express = require('express');
const { usersController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/', usersController.postUser);
router.get('/', verifyToken, usersController.getAll);
router.get('/:id', verifyToken, usersController.getById);

module.exports = router;
