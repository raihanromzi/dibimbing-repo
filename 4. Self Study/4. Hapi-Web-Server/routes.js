const routes = [
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			// Query Parameter localhost:5000?name=Jake$location=Bandung
			const { name, location } = request.query;
			return `Hello ${name} from ${location}`;
		}
	},
	{
		method: 'GET',
		path: '/hello/{name?}',
		handler: (request, h) => {
			const { lang } = request.query;
			if (lang === 'id') {
				return `Hai, ${request.params.name}!`;
				// return h.response('created').code(201);
			}
			return `Hello, ${request.params.name} without if`;
		}
	},
	{
		method: '*',
		path: '/',
		handler: (request, h) => {
			return 'Halaman tidak dapat diakses dengan method tersebut';
		}
	},
	{
		method: 'GET',
		path: '/about',
		handler: (request, h) => {
			return 'about';
		}
	},
	{
		method: '*',
		path: '/about',
		handler: (request, h) => {
			return 'Halaman tidak dapat diakses dengan method tersebut';
		}
	},
	{
		method: '*',
		path: '/{any*}',
		handler: (request, h) => {
			return 'Halaman tidak ditemukan';
		}
	},
	{
		method: 'POST',
		path: '/login',
		handler: request => {
			// Body/Payload Request
			const { username, password } = request.payload;
			return `Welcome ${{ username }}`;
		}
	}


];

module.exports = routes;