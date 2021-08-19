const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

const { getUsers, getUser, postUsers, deleteUserById } = usersController;

router.get('/', getUsers);
router.get('/:userid', getUser);
router.post('/', postUsers);
router.post('/:userid', postUsers);
router.post('/delete/:userid', deleteUserById);

module.exports = router;
