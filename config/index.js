const dev = process.env.NODE_ENV !== 'production'

export const server = {
	frontend: {
		url: (
			(dev)
			? 'http://localhost:3000/'
			: 'http://codehub.vercel.app'
		)
	},
	backend: {
		url: (
			(dev)
			? 'http://localhost:80/codehub/'
			: 'https://codehubcti.000webhostapp.com/'
		)
	}
}