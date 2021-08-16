const fs = require('fs');
const readFromList = require('../util/read-from-list');
const { v4: uuidv4 } = require('uuid');

const targetFile = 'users.json';

module.exports = class Users {
  constructor(dataObj) {
    for (const [key, value] of Object.entries(dataObj)) {
      this[`${key}`] = value;
    }
  }

  saveUser(id) {
    readFromList(targetFile, (userList, mainpath) => {
      let newUserList;
      if (id) {
        const user = userList.find((u) => u.id === id);
        newUserList = userList.map((u) => {
          if (u.id === id) {
            u = this;
          }
        });
        console.log('newUserList', newUserList);
      } else {
        newUserList = userList;
        this.id = uuidv4();
        newUserList.push(this);
      }
      fs.writeFile(mainpath, JSON.stringify(newUserList), (err) => {
        console.log(err);
      });
    });
  }

  static getUsers(cb) {
    readFromList(targetFile, cb);
  }

  static getUserById(id, cb) {
    readFromList(targetFile, (users) => {
      const user = users.find((u) => u.id === id);
      cb(user);
    });
  }
};
