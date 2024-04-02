import {Application} from "express"
import {Connection} from "mongoose";
import mongooseLoader from "./mongoose"
import dependencyInjector from './dependencyInjector'
import expressLoader from './express'
import swaggerLoader from './swagger'
export default async ({
    expressApp,
}: {
    expressApp: Application
}): Promise<void> => {
    const database: Connection = await mongooseLoader()
    console.log(`Database Load Complete`)
    await dependencyInjector({ database })

    expressLoader({ app: expressApp })
}
