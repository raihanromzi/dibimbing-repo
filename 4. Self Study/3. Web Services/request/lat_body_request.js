import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;

	const { method } = req.method;
	if (method === 'GET') {
		res.end('<h1>Response GET</h1>');
	}
	if (method === 'POST') {
		let body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
		});
		req.on('end', () => {
			body = Buffer.concat(body).toString();
			res.end(`<h1>Hai, ${body}</h1>`);
		});
	}
});

const host = 'localhost';
const port = 9000;
server.listen(port, host, () => {
	console.log(`Server berjalan pada http://${host}:${port}`);
});