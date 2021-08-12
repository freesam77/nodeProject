const fs = require('fs')
const path = require('path');
const mainDir = require('./path');

const readFromList = (targetFile, cb) => {
    const mainpath = path.join(mainDir, 'data', targetFile);
    fs.readFile(mainpath, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        let list = JSON.parse(fileContent);
        cb(list, mainpath);
    });
};

module.exports = readFromList