import { createServer } from '../src'
import supertest from 'supertest'
import ChaiUuid from 'chai-uuid'
import chai from 'chai'
chai.use(ChaiUuid)
const expect = chai.expect

describe('API', () => {
	const port = 8811
	const server = createServer(8811, false)
	const URL = `http://localhost:${port}`
	before(() => server.start())
	after(() => server.stop())
	context('Pour la route /', () => {
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
	})

	it('répond un code 404 quand on appelle GET /toma', async () => {
		// WHEN
		await supertest(URL)
			.get('/toma')
			// THEN
			.expect(404)
	})
	context('Pour la route /contact', () => {
		it('répond un code 201 quand on appelle POST', async () => {
			// When
			await supertest(URL)
				.post('/contact')
			// THEN
				.expect(201)
		})
		it('répond un id ', async () => {
			// WHEN
			const actual = await supertest(URL)
				.post('/contact')
			// THEN
			expect(actual.body.id).not.to.be.undefined
			expect(actual.body.id).to.be.a.uuid('v4')
		})
	})
})
