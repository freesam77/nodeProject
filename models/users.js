const fs = require('fs');
const path = require('path');
const mainDir = require('../util/path');
const { v4: uuidv4 } = require('uuid');

const mainpath = path.join(mainDir, 'data', 'users.json');

const readUsersFromFile = (cb) => {
  fs.readFile(mainpath, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    let usersList = JSON.parse(fileContent);
    usersList.map((user) => {
      if (user.id === undefined) {
        user.id = uuidv4();
      }
    });
    cb(usersList);
  });
};
module.exports = class Users {
  constructor(dataObj) {
    for (const [key, value] of Object.entries(dataObj)) {
      this[`${key}`] = value;
    }
  }

  saveUser() {
    readUsersFromFile((userList) => {
      this.id = uuidv4();
      userList.push(this);
      fs.writeFile(mainpath, JSON.stringify(userList), (err) => {
        console.log(err);
      });
    });
  }

  static getUsers(cb) {
    readUsersFromFile(cb);
  }

  static getUserId(id, cb) {
    readUsersFromFile((users) => {
      const user = users.find((u) => u.id === id);
      cb(user);
    });
  }
};
