const mongodb = require('mongodb')
const { MongoClient } = mongodb

const pass = '15Deepdive!!'

const mongoConnect = async (cb) => {
    try {
        const client = await MongoClient.connect(`mongodb+srv://sam:${pass}@cluster0.zuvwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        console.log("resolve", client)
        cb(client)
    } catch (err) {
        console.log(err)
    }
}

module.exports = mongoConnect