import { expect } from 'chai'
import { createServer } from '../src/'
import supertest from 'supertest'

describe('API', () => {
    const server = createServer()
    before(async () => {
        console.log("Au début")
        await server.start()
    })
    after(async () => {
        console.log("A la fin")
        await server.stop()
    })
    it('répond Bonjour quand on appelle GET /', async () => {
        // GIVEN
        
        // WHEN
        await supertest("http://localhost:8888")
            .get("/")
        // THEN
            .expect("Bonjour")
    })
    it('répond un code 202 quand on appelle GET /', async () => {
        // GIVEN
        
        // WHEN
        await supertest("http://localhost:8888")
            .get("/")
        // THEN
            .expect(202)

    })
})