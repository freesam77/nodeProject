const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

const { getUsers, getUser, postUsers } = usersController;

router.get('/', getUsers);
router.get('/:userid', getUser);
router.post('/', postUsers);

module.exports = router
