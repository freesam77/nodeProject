const path = require('path')
const dir = require.main ? require.main.filename : process.mainModule.filename 
module.exports = path.dirname(dir)