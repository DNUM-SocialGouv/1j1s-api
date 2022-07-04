import { expect } from 'chai'
import { createServer } from '../src/'
import supertest from 'supertest'

describe('API', () => {
    it('répond Bonjour quand on appelle GET /', async () => {
        // GIVEN
        const server = createServer()
        await server.start()
        // WHEN
        await supertest("http://localhost:8888")
            .get("/")
        // THEN
            .expect("Bonjour")

    })
})