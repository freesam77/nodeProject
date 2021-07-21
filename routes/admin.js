const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

const { getUsers, postUsers } = usersController;

router.get('/users', getUsers);
router.post('/users', postUsers);

module.exports = router
