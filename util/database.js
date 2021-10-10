const mongodb = require('mongodb')
const { MongoClient } = mongodb


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

let db;

const mongoConnect = async (cb) => {
    try {
        const client = await MongoClient.connect(`mongodb+srv://sam:${process.env.PASS}@cluster0.zuvwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        db = client.db()
        cb()
    } catch (err) {
        console.log(err)
    }
}

const getDb = () => db ? db : new Error('No database found!')

exports.mongoConnect = mongoConnect
exports.getDb = getDb