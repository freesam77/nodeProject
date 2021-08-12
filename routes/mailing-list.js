const express = require('express');

const mailingListController = require('../controllers/mailing-list');

const router = express.Router();

const { addMailingList, getMailingList } = mailingListController;

router.post('/', addMailingList);
router.get('/', getMailingList);

module.exports = router
