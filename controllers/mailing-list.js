const MailingList = require('../models/mailing-list')

exports.getMailingList = async (_req, res, _next) => {
    MailingList.find({}, (err, emailList) => {
        if (err) {
            console.log(err)
        }
        console.log('emailList', emailList)
        res.render('mailing-list', {
            emailList,
            path: `/mailing-list`,
            title: 'Mailing list',
        });
    }).populate('user_id');
};

exports.addMailingList = (req, res, _next) => {
    const entry = new MailingList({ user_id: req.body.id })
    entry.save()
    res.redirect('/users')
    return res.end()
};

exports.deleteListById = (req, res, _next) => {
    const { userid } = req.params;
    MailingList.findByIdAndDelete(userid, (err) => {
        console.log(err ? err : `${userid} is deleted from list`)
    })
    res.redirect('/mailing-list');
    return res.end();
};
