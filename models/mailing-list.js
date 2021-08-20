const fs = require('fs');
const readFromList = require('../util/read-from-list')
const path = require('path');
const mainDir = require('../util/path');
const usersFile = 'users.json'
const mailingListFile = 'mailing-list.json'

module.exports = class MailingList {
    constructor(id) {
        this.id = id
    }


    saveList() {
        readFromList(mailingListFile, (mailingList, mainpath) => {
            if (!mailingList.includes(this.id)) {
                mailingList.push(this.id);
            }
            fs.writeFile(mainpath, JSON.stringify(mailingList), (err) => {
                console.log(err)
            });
        })
    }

    static getMailingList(cb) {
        readFromList(usersFile, (users) => {
            const mainPath = path.join(mainDir, 'data', mailingListFile);
            fs.readFile(mainPath, (err, fileContent) => {
                if (err) {
                    cb([]);
                }

                let mailingList = JSON.parse(fileContent)
                const newList = []

                mailingList.forEach(id => {
                    newList.push(users.find(user => user.id === id))
                })
                cb(newList)
            })
        })
    }

    static deleteListById(id) {
        readFromList(mailingListFile, (mailingList, mainpath) => {
            let newMailingList = mailingList.filter((userid) => userid !== id);
            fs.writeFile(mainpath, JSON.stringify(newMailingList), (err) => {
                console.log(err);
            });
        });
    }
};