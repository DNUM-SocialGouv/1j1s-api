import { createServer } from '../src/'
import supertest from 'supertest'

describe('API', () => {
    const port = 8811
    const server = createServer(8811)
    const URL = `http://localhost:${port}`
    before(async () => {
        console.log("Au début")
        await server.start()
    })
    after(async () => {
        console.log("A la fin")
        await server.stop()
    })
    it('répond Bonjour quand on appelle GET /', async () => {
        // WHEN
        await supertest(URL)
            .get("/")
        // THEN
            .expect("Bonjour")
    })
    it('répond un code 202 quand on appelle GET /', async () => {
        // WHEN
        await supertest(URL)
            .get("/")
        // THEN
            .expect(202)

    })
    it('répond un code 404 quand on appelle GET /toma', async () => {
        // WHEN
        await supertest(URL)
            .get("/toma")
            // THEN
            .expect(404)

    })
})
