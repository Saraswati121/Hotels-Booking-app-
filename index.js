require("dotenv").config()

const jsonServer = require("json-server")

const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

server.use(middleware)

server.use(router)


const port = process.env.PORT || 8080
server.listen(port,console.log("started"))