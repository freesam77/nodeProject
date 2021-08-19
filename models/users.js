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
        newUserList = userList;
        const user = userList.find((u) => u.id === id);
        userList.map((u, order) => {
          if (u.id === id) {
            this.id = id;
            newUserList[order] = this;
          }
        });
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

  static deleteUserById(id) {
    readFromList(targetFile, (userList, mainpath) => {
      let newUserList = userList.filter((user) => user.id !== id);
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
