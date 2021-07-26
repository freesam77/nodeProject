const users = [];
module.exports = class Users {
  constructor(name) {
    this.name = name;
  }

  saveUsers() {
    users.push(this);
  }

  static getUsers() {
    return users;
  }
};
