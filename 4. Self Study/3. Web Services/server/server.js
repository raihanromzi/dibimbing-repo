import http from 'http';

const requestListener = (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;
	res.end('<h1>Halo HTTP Server!</h1>');
};

const server = new http.createServer(requestListener);

// 4 Parameter listen = port, hostname, listeningListener
const host = 'localhost';
const port = 5000;
server.listen(port, host, () => {
	console.log(`Server berjalan pada http://${host}:${port}`);
});

