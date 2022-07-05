import Http from 'http'
import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import * as util from "util";

export function createServer(port = 8080, logs = true) {
    const app = new Koa()
    const router = new Router()
    const server = Http.createServer(app.callback())

    if (logs) {
        app.use(Logger())
    }
    app.use(router.routes())

    router.get("/", (ctx) => {
        ctx.body = "Bonjour"
        ctx.status = 202
    })

    return {
        start: util.promisify(server.listen.bind(server, port)),
        stop: util.promisify(server.close.bind(server))
    }
}
