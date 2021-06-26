const fs = require('fs')

const reqHandler = (req, res) => {

    const { url, method } = req
    // index page
    if (url === '/') {
        res.write(`
        <html>
            <body>
                <h1>Please enter the new user:</h1>
                <hr/>
                <form method="POST" action="/create-user">
                    <input type="text" name="username"/>
                    <button type="submit">Submit</button>
                </form>
                <a href="/users">Users</a>
            </body>
        </html>
    `)
    }
    // list of users
    if (url === '/users') {
        const userData = fs.readFileSync('./users.txt').toString().replace(',', "")
        console.log("userData is ", userData)
        const userList = userData.split(',')
        res.write(`
            <html>
                <body>
                    <h1>Hi there user, here is the list of the user:</h1>
                    <hr/>
                    <ul>${userList.map((user) => `<li>${user}</li>`).join('')}</ul>
                    <a href="/">Home</a>
                </body>
            </html>
        `)
        return res.end()
    }

    // process the POST request from /create-user
    if (url === '/create-user' && method === "POST") {
        const userData = []
        req.on('data', chunk => {
            userData.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(userData).toString()
            const mes = "," + parsedBody.split('=')[1].replace(/[+]/g, " ")

            fs.appendFile('users.txt', mes, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }

}
module.exports = reqHandler