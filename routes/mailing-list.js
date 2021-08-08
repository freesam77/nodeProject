const express = require('express');

const mailingListController = require('../controllers/mailing-list');

const router = express.Router();

const { addMailingList } = mailingListController;

router.post('/', addMailingList);

module.exports = router
