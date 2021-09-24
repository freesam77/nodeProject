const fs = require('fs');
const readFromList = require('../util/read-from-list');
const mongoDb = require('mongodb')
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
        return db.collection('users').find().toArray().then(res => res).catch(err => { console.log(err) })
    }

    static async getUserById(id) {
        try {
            const db = getDb()
            const findID = await db.collection('users').find({ _id: new mongoDb.ObjectId(id) }).next()
            return findID
        } catch (err) {
            console.log(err)
        }
    }
};
