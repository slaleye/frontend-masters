/* Import http library from node */
const http = require('http');

/* createServer(req,res, next) */
http.createServer(function(req,res){
	res.write('Sziastok! :)');
	res.end();
}).listen(8080);

console.log('Server Started! Listening on port: 8080');