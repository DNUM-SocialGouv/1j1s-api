import Http from 'http'
import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import * as util from 'util'
import { EnvoyerDemandeDeContact } from './domain/usecase/EnvoyerDemandeDeContact'
import { demandeDeContactRepository } from './bin/repositories'

export function createServer (port = 8080, logs = true) {
	const app = new Koa()
	const router = new Router()
	const server = Http.createServer(app.callback())

	if (logs) {
		app.use(Logger())
	}
	app.use(router.routes())

	router.get('/', (ctx) => {
		ctx.body = 'Bonjour'
		ctx.status = 202
	})

	router.post('/contact', async (ctx) => {
		const envoyerDemandeDeContact = new EnvoyerDemandeDeContact(demandeDeContactRepository)
		const id = await envoyerDemandeDeContact.execute()
		ctx.body = { id }
		ctx.status = 201
	})

	return {
		start: util.promisify(server.listen.bind(server, port)),
		stop: util.promisify(server.close.bind(server))
	}
}
