const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
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
})

server.listen('3000')