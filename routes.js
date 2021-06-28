// redundant file now since we are using express
const fs = require('fs')

const reqHandler = (req, res) => {
    const { url, method } = req
    if (url === "/") {
        res.write(`
            <html>
                <body>
                    <h1>hello</h1>
                    <form action="/message" method="POST">
                        <input type="text" name="message"/>
                        <button type"submit">Submit</button>
                    </form>
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
            console.log('body', body)
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const mes = parsedBody.split('=')[1].replace(/[+]/g, " ")
            console.log("mes", mes)
            fs.writeFile('message.txt', mes, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            })
        })


    }
}

module.exports = reqHandler