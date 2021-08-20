const express = require('express');

const mailingListController = require('../controllers/mailing-list');

const router = express.Router();

const { addMailingList, getMailingList, deleteListById } = mailingListController;

router.post('/', addMailingList);
router.get('/', getMailingList);
router.post('/delete/:userid', deleteListById);

module.exports = router
