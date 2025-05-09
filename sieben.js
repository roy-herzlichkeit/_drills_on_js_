import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method = req.method;
    if (url === '/form') {
        res.write(`
            <html>
                <head>
                    <title>
                        Node Server
                    </title>
                </head>
                <body>
                    <form action="/redirector" method="POST">
                        <label for="message">Message:</label>
                        <input type="text" id="message" placeholder="MESSAGE">
                        <input type="submit" value="Submit">
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if (url === "/redirector" && method === "POST") {
        fs.writeFileSync("message.txt", "DUMMY");
        setTimeout(() => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }, 10000);
    }
    res.write(`
        <html>
            <head>
                <title>
                    Node Server
                </title>
            </head>
            <body>
                <h1>
                    Hello World!
                </h1>
            </body>
        </html>
    `);
    res.end();
});

server.listen(3301);