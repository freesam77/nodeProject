const fs = require('fs');
const readFromList = require('../util/read-from-list')
const { v4: uuidv4 } = require('uuid');

const targetFile = 'users.json';

module.exports = class Users {
    constructor(dataObj) {
        for (const [key, value] of Object.entries(dataObj)) {
            this[`${key}`] = value;
        }
    }

    saveUser() {
        readFromList(targetFile, (userList, mainpath) => {
            this.id = uuidv4();
            userList.push(this);
            fs.writeFile(mainpath, JSON.stringify(userList), (err) => {
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
