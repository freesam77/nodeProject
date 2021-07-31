const fs = require('fs');
const path = require('path');
const mainDir = require('../util/path');

const mainpath = path.join(mainDir, 'data', 'users.json');

const readUsersFromFile = (cb) => {
    fs.readFile(mainpath, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}
module.exports = class Users {
    constructor(name) {
        this.name = name;
    }

    saveUser() {
        readUsersFromFile((userList) => {
            userList.push(this)
            fs.writeFile(mainpath, JSON.stringify(userList), (err) => {
                console.log(err);
            });
        })
    }

    static getUsers(cb) {
        readUsersFromFile(cb)
    }
};
