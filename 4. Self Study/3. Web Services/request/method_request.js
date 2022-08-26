import http from 'http';

const server = new http.createServer((req, res) => {
	// Bisa mengetahui jenis request yang dikirimkan client
	// Object Destructuring
	const { method } = req;
	if (method === 'GET') {
		// Response ketika "GET"
	} else if (method === 'POST') {
		// Response ketika "POST"
	}
});