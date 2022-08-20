import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;

	const { method } = req;
	if (method === 'GET') {
		res.end('<h1>Response GET</h1>');
	}
	if (method === 'POST') {
		res.end('<h1>Response POST</h1>');
	}
	if (method === 'PUT') {
		res.end('<h1>Response PUT</h1>');
	}
	if (method === 'DELETE') {
		res.end('<h1>Response DELETE</h1>');
	}
});

const host = 'localhost';
const port = 8000;
server.listen(port, host, () => {
	console.log(`Server berjalan pada http://${host}:${port}`);
});
