const MailingList = require('../models/mailing-list')
exports.addMailingList = (req, res, next) => {
    const entry = new MailingList(req.body.id)
    entry.saveList()
    res.redirect('/users')
    return res.end()
};