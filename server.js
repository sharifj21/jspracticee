var http = require('http');
var server = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'}); // Fix: Closing curly brace and adding a missing closing parenthesis
        res.write('<html><body><p>Blank page</p></body></html>'); // Fix: Closing the <p> tag and adding a closing </body></html> tags
        console.log("request de client");
        res.end();
    }
});

server.listen(5000);
console.log('node.js port 5000 on');
