const MailingList = require('../models/mailing-list')

exports.getMailingList = (req, res, next) => {
    MailingList.getMailingList((list) => {
        const emailList = list.filter(li => li !== undefined)
        res.render('mailing-list', {
            emailList,
            path: '/mailing-list',
            title: 'Mailing list'
        })
    })
};

exports.addMailingList = (req, res, next) => {
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
