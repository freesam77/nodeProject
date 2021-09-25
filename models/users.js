const fs = require('fs');
const mongoDb = require('mongodb')
const getDb = require('../util/database').getDb


module.exports = class Users {
    constructor(dataObj) {
        for (const [key, value] of Object.entries(dataObj)) {
            this[`${key}`] = value;
        }
    }
    async saveUser(id) {
        const db = getDb()
        if (id) {
            // update the user with this id
            try {
                return await db.collection('users').updateOne({ _id: new mongoDb.ObjectId(id) }, { $set: { ...this } })
            } catch (err) {
                console.log(err)
            }
        } else {
            // create new entry
            return db.collection('users').insertOne(this).then(res => console.log('response is', res)).catch(err => { console.log(err) })
        }
    }

    static async deleteUserById(id) {
        const db = getDb()
        try {
            return await db.collection('users').deleteOne({ _id: new mongoDb.ObjectId(id) })
        } catch (err) {
            console.log(err)
        }
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
