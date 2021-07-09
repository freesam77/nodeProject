const path = require('path')
const dir = require.main === null ? process.mainModule.filename : require.main.filename
module.exports = path.dirname(dir)