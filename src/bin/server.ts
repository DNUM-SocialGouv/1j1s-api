import { createServer } from "../index"

const port = process.env.PORT ? Number(process.env.PORT) : 8080
const server = createServer(port)
server.start().then(() => {
    console.log(`Serveur démarré sur le port ${port}`)
}).catch((error) => {
    console.error("Serveur n'a pas démarré", error)
    process.exit(1)
})
