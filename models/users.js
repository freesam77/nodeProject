const fs = require('fs');
const path = require('path');
const mainDir = require('../util/path');

const mainpath = path.join(mainDir, 'data', 'users.json');
module.exports = class Users {
    constructor(name) {
        this.name = name;
    }

    saveUsers() {
        fs.readFile(mainpath, (err, fileContent) => {
            let users = [];
            if (!err) {
                users = JSON.parse(fileContent);
            }
            users.push(this);
            users = JSON.stringify(users);
            fs.writeFile(mainpath, users, (err) => {
                console.log(err);
            });
        });
    }

    static getUsers(callBack) {
        fs.readFile(mainpath, (err, fileContent) => {
            if (err) {
                callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
};
