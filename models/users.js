const fs = require('fs');
const readFromList = require('../util/read-from-list');
const { v4: uuidv4 } = require('uuid');
const getDb = require('../util/database').getDb

const targetFile = 'users.json';

module.exports = class Users {
    constructor(dataObj) {
        for (const [key, value] of Object.entries(dataObj)) {
            this[`${key}`] = value;
        }
    }
    saveUser() {
        const db = getDb()
        return db.collection('users').insertOne(this).then(res => console.log('response is', res)).catch(err => { console.log(err) })
    }

    static deleteUserById(id) {
        readFromList(targetFile, (userList, mainpath) => {
            let newUserList = userList.filter((user) => user.id !== id);
            fs.writeFile(mainpath, JSON.stringify(newUserList), (err) => {
                console.log(err);
            });
        });
    }

    static getUsers() {
        const db = getDb()
        return db.collection('users').find().toArray().then(res => { console.log(res); return res }).catch(err => { console.log(err) })
    }

    static getUserById(id, cb) {
        readFromList(targetFile, (users) => {
            const user = users.find((u) => u.id === id);
            cb(user);
        });
    }
};
