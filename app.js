const express = require("express");
const { sum } = require("./helper");

const app = express();

app.get('/', (req, res) => {
    res.send('Response sent ! ')
})

app.listen(3200);


// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end('Some response');
// })
// server.listen(3200);
// const total = sum(11, 27);
// console.log(total);