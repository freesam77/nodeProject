const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:userid', usersController.getUser);
router.post('/', usersController.postUsers);
router.post('/:userid', usersController.postUsers);
router.post('/delete/:userid', usersController.deleteUserById);

module.exports = router;
