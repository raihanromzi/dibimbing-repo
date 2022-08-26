import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('X-Powered-By', 'NodeJS');
	res.end('shit');
});

server.listen(5000, 'localhost', () => {
	console.log(`http://localhost:5000`);
});