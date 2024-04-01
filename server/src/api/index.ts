import { Router } from 'express'
import userRoutes from './routes/user'
import dogRoutes from "./routes/dog"


export default () => {
    const router = Router()
    userRoutes(router)
    dogRoutes(router)

    return router
}
