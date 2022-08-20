import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;
	res.end('<h1>HELLO MOTHERFUCKER!!</h1>');
});

const port = 5000;
const host = 'localhost';
server.listen(port, host, () => {
}, () => {
	console.log(`Server is running on http://${host}:${port}`);
});