const MailingList = require('../models/mailing-list')

exports.getMailingList = async (_req, res, _next) => {
    const emailList = await MailingList.getMailingList()
    res.render('mailing-list', {
        emailList,
        path: '/mailing-list',
        title: 'Mailing list'
    })
};

exports.addMailingList = (req, res, _next) => {
    const entry = new MailingList(req.body.id)
    entry.saveList()
    res.redirect('/users')
    return res.end()
};

exports.deleteListById = (req, res, _next) => {
    const { userid } = req.params;
    MailingList.deleteListById(userid);
    res.redirect('/mailing-list');
    return res.end();
};
