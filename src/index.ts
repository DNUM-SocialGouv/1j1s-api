import Http from 'http'
import { servicesVersion } from 'typescript'

export function createServer(){
    const server = Http.createServer((req, res) => {
        res.write('Bonjour')
        res.end()
    })
    return {
        async start() {
            return new Promise<void>((ok, ko) => {
                // @ts-ignore
                server.listen(8888, (error) => {
                    if (error) {
                        ko(error)
                    } else {
                        ok()
                    }
                })
            })
        },
        async stop() {
            return new Promise<void>((ok, ko) => {
                server.close((error) => {
                    if (error) {
                        ko(error)
                    } else {
                        ok()
                    }
                })
            })
        }
    }
}