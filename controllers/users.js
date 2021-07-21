const users = [];
exports.getUsers = (req, res, next) => {
  res.render('admin', {
    users,
    path: `/admin${req.url}`,
    activeAdminUsers: true,
    title: 'Users',
  });
};

exports.postUsers = (req, res, next) => {
  users.push(req.body);
  res.redirect('back');
  return res.end();
};
