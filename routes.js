import fs from "fs";

const handler = (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
          <html>
            <head><title>Enter Message</title></head>
            <body>
              <form action="/message" method="POST">
                <label for="message">Message:</label>
                <input type="text" id="message" name="message" placeholder="MESSAGE" />
                <button type="submit">Submit</button>
              </form>
            </body>
          </html>
        `);
        return res.end();
    }
    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on("data", chunk => {
            console.log("chunk:", chunk);
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody:", parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message, "utf8");
            console.log("message.txt written:", message);
            res.writeHead(302, { Location: "/" });
            return res.end();
        });
        return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <html>
          <head><title>Hello</title></head>
          <body><h1>Hello World!</h1></body>
        </html>
      `);
    res.end();
}

export default handler;