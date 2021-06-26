const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
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
            </body>
        </html>
    `)
    }
    // list of users
    if (url === '/user') {
        const users = [
            "User 1",
            "User 2",
            "User 3",
        ]
        res.write(`
            <html>
                <body>
                    <h1>Hi there user, here is the list of the user:</h1>
                    <hr/>
                    <ul>${users.map((user) => `<li>${user}</li>`).join('')}</ul>
                </body>
            </html>
        `)
    }

    // process the POST request from /create-user
    if (url === '/create-user' && method === "POST") {
        const userData = []
        req.on('data', chunk => {
            userData.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(userData).toString()
            const mes = parsedBody.split('=')[1].replace(/[+]/g, " ")

            fs.writeFile('users.txt', mes, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    return res.end()
})
server.listen('3000')