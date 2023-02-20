const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.use((req, res, next) => {
    res.send("<html><h1>Hello from Express!!!</h1></html>");
});

app.listen(4000);

// const server = http.createServer(app);
// server.listen(4000);
