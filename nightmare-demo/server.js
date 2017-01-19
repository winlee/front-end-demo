var httpServer = require('http-server');
var server = httpServer.createServer();
server.listen(8180);
process.send('listening');
