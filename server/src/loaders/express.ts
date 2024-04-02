import express, { Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import config from '../config'
import path from "path";
import routes from "../api/index"
import swagger from "./swagger";

export default ({ app }: { app: Application }): void => {
    /**
     * @openapi
     * /api/health:
     *   get:
     *     tags:
     *       - Health Check
     *     description: Responds if the app is up and running
     *     responses:
     *       200:
     *         description: App is up and running
     */
    app.get('/api/health', (req: Request, res: Response) => {
        res.status(200).end()
    })

    app.head('/api/health', (req: Request, res: Response) => {
        res.status(200).end()
    })
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(
        cors({
            origin: config.frontend.url,
            credentials: true,
        })
    )
    swagger(app)
    /*
   Load Frontend as Static Pages
   */
    app.use(express.static(path.join(__dirname, '../../../client/build')))
    /*
    API Routes
    */
    app.use('/api', routes())
    /*
    Load Pages with Conditional Rendering
    */
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../../../client/build/index.html'))
    })
}
