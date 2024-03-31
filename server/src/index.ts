import config from "./config";
import express from "express";
import Loader from './loaders/index'
import 'reflect-metadata'
const startServer = async () => {
    const app = express()

    await Loader({ expressApp: app })

    return app.listen(config.port, () => {
        console.log(`Server Listening on port: ${config.port}`)
    })
}

startServer()
    .then(() => {
        console.log(`Server Start Successfully`)
    })
    .catch((e) => {
        console.log(`Server Start Failed Because: ${e.message}`)
    })
