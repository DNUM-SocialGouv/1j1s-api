import Http from 'http'

export function createServer(port = 8080) {
    const server = Http.createServer((req, res) => {
        if (req.url === "/") {
            res.statusCode = 202
            return res.end('Bonjour')
        }

        res.statusCode = 404
        return res.end()
    })

    async function start() {
        return new Promise<void>((ok, ko) => {
            // @ts-ignore
            server.listen(port, (error) => error ? ko(error) : ok())
        })
    }

    async function stop() {
        return new Promise<void>((ok, ko) => {
            server.close((error) => error ? ko(error) : ok())
        })
    }

    return {start, stop}
}
