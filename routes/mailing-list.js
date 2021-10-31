const express = require('express');

const mailingListController = require('../controllers/mailing-list');

const router = express.Router();

router.post('/', mailingListController.addMailingList);
router.get('/', mailingListController.getMailingList);
router.post('/delete/:userid', mailingListController.deleteListById);

module.exports = router
