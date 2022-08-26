import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('X-Powered-By', 'NodeJS');
	const { method, url } = req;

	if (url === '/') {
		if (method === 'GET') {
			res.statusCode = 200;
			res.end(JSON.stringify({
				message: 'Ini adalah homepage',
			}));
		} else {
			res.statusCode = 400;
			res.end(JSON.stringify({
				message: `Halaman tidak dapat diakses dengan ${method} req`,
			}));
		}
	} else if (url === '/about') {
		if (method === 'GET') {
			res.statusCode = 200;
			res.end(JSON.stringify({
				message: 'Halo! Ini adalah halaman about',
			}));
		} else if (method === 'POST') {
			let body = [];

			req.on('data', (chunk) => {
				body.push(chunk);
			});

			req.on('end', () => {
				body = Buffer.concat(body).toString();
				const { name } = JSON.parse(body);
				res.statusCode = 200;
				res.end(JSON.stringify({
					message: `Halo, ${name}! Ini adalah halaman about`,
				}));
			});
		} else {
			res.statusCode = 400;
			res.end(JSON.stringify({
				message: `Halaman tidak dapat diakses menggunakan ${method}, req`
			}));
		}
	} else {
		res.statusCode = 404;
		res.end(JSON.stringify({
			message: 'Halaman tidak ditemukan!',
		}));
	}
});

server.listen(8000, 'localhost', () => {
	console.log('http://localhost:8000');
});