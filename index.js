const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const { url, method } = req
    if (url === "/") {
        res.write(`
            <html>
                <body>
                    <h1>hello</h1>
                    <form action="/message" method="POST">
                        <input type="text"/>
                        <button type"submit">Submit</button>
                    </form
                </body>
            </html>
        `)
        return res.end()
    }

    if (url === '/message' && method === 'POST') {
        const data = "DUMMY TEXTss"
        fs.writeFileSync('message.txt', data)
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();

    }
})

console.log('Server ON')
server.listen('3000')