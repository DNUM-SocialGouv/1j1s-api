import { createServer } from '../src/'
import supertest from 'supertest'

describe('API', () => {
	const port = 8811
	const server = createServer(8811, false)
	const URL = `http://localhost:${port}`
	before(() => server.start())
	after(() => server.stop())
	it('répond Bonjour quand on appelle GET /', async () => {
		// WHEN
		await supertest(URL)
			.get('/')
			// THEN
			.expect('Bonjour')
	})
	it('répond un code 202 quand on appelle GET /', async () => {
		// WHEN
		await supertest(URL)
			.get('/')
			// THEN
			.expect(202)
	})
	it('répond un code 404 quand on appelle GET /toma', async () => {
		// WHEN
		await supertest(URL)
			.get('/toma')
			// THEN
			.expect(404)
	})
})
