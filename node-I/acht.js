import http from "http";
import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("REACHED MIDDLEWARE 1");
    next();
});

app.use((req, res, next) => {
    console.log("REACHED MIDDLEWARE 2");
    res.send(`
        <html>
          <head><title>Hallo</title></head>
          <body><h1>Hallo Welt!</h1></body>
        </html>
    `)
    next();
})

const server1 = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/html" });
    res.write(`
        <html>
          <head><title>Hello</title></head>
          <body><h1>Hello World!</h1></body>
        </html>
    `);
    res.end();
});

server1.listen(3000, () => {
    console.log("SERVER1 LIVE AT http://127.0.0.1:3000/");
});

const server2 = http.createServer(app);

server2.listen(3001, () => {
    console.log("SERVER2 LIVE AT http://127.0.0.1:3001/");
})