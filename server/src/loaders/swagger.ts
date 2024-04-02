import { Application } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Carbon Cell Task API Docs',
            version,
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['/src/api/routes/*.ts', 'src/loaders/express.ts'],
}
const swaggerSpec = swaggerJSDoc(options)
export default (app: Application): void => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
