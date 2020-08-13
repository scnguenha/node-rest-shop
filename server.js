const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8181;

const server = http.createServer(app);

server.listen(port);
console.log("Node-Rest-Shop app listening on port " + port )