const getDb = require('../util/database').getDb
const mongoDb = require('mongodb')


module.exports = class MailingList {
    constructor(id) {
        this.id = id
    }
    async saveList() {
        const db = getDb()
        return db.collection('mailing-list').insertOne(this).then(res => console.log('response is', res)).catch(err => { console.log(err) })
    }

    static async getMailingList() {
        // TODO: think of refactoring this to be just a state instead of using mongoDB collection
        const db = getDb()
        try {
            const mailListIDQueries = await db.collection('mailing-list').find().toArray()
            const queries = mailListIDQueries.map(({ id }) => new mongoDb.ObjectId(id))
            const foundUsers = await db.collection('users').find({
                '_id': { $in: [...queries] }
            }).toArray()
            return foundUsers
        } catch (err) {
            console.log(err)
        }
    }

    static async deleteListById(id) {
        const db = getDb()
        try {
            return await db.collection('mailing-list').deleteOne({ _id: new mongoDb.ObjectId(id) })
        } catch (err) {
            console.log(err)
        }
    }
};