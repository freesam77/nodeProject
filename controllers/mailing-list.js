const MailingList = require('../models/mailing-list')
const { getIsLoggedIn } = require('../util/auth')

exports.getMailingList = async (req, res, _next) => {
    MailingList.find({}, (err, emailList) => {
        if (err) {
            console.log(err)
        }
        res.render('mailing-list', {
            emailList,
            path: `/mailing-list`,
            title: 'Mailing list',
            isAuthenticated: getIsLoggedIn(req)
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
