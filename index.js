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
                        <input type="text" name="message"/>
                        <button type"submit">Submit</button>
                    </form
                </body>
            </html>
        `)
        return res.end()
    }

    if (url === '/message' && method === 'POST') {

        // parsing request bodies
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk', chunk)
            body.push(chunk)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const mes = parsedBody.split('=')[1]
            console.log("mes", mes)
            fs.writeFileSync('message.txt', mes)
        })

        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();

    }
})

console.log('Server ON')
server.listen('3000')