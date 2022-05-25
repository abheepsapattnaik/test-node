const { sum } = require("./helper");
const http = require("http");

const server = http.createServer((req, res) => {
    res.end('Some response');
})

server.listen(3200);

const total = sum(11, 27);
console.log(total);