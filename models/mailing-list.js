const mongoose = require('mongoose')
const { Schema } = mongoose;

const mailingListSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('MailingList', mailingListSchema)