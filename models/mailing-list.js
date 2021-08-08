const fs = require('fs');
const path = require('path');
const mainDir = require('../util/path');
const mainpath = path.join(mainDir, 'data', 'mailing-list.json');

module.exports = class MailingList {
    constructor(id) {
        this.id = id
    }


    saveList() {
        fs.readFile(mainpath, (err, fileContent) => {
            if (err) {
                console.log(err)
                return
            }
            let mailingList = JSON.parse(fileContent);
            console.log(mailingList)
            if (!mailingList.includes(this.id)) {
                mailingList.push(this.id);
            }
            fs.writeFile(mainpath, JSON.stringify(mailingList), (err) => {
                console.log(err)
            });
        });
    }
};