import Http from 'http'

export function createServer(port = 8080) {
    const server = Http.createServer((req, res) => {
        res.statusCode = 202
        res.write('Bonjour')
        res.end()
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

    return { start, stop }
}