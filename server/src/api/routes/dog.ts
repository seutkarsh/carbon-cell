import { Router, Request, Response } from 'express'
import { Container } from 'typedi'
import { PublicApiService } from '../../services/PublicApiService'
import { ResponseWrapper } from '../responses/ResponseWrapper'
import { IDogs } from '../responses/dog'
import validateToken from "../middlewares/authentication";

export default (router: Router) => {
    const publicApiService = Container.get(PublicApiService)


    router.get('/dogs',validateToken, async (req: Request, res: Response) => {
        const response = new ResponseWrapper<IDogs>()
        try {
            const data: IDogs = await publicApiService.getAllDogs()
            response.setData(data)
        } catch (e) {
            response.setError(e.message)
        }
        res.json(response)
    })

    router.get('/dogs/images',validateToken, async (req: Request, res: Response) => {
        const response = new ResponseWrapper<string[]>()
        try {
            const breed: string = req.query.breed.toString()
            const quantity:string = req.query.quantity.toString()
            const data: string[] = await publicApiService.getDogImages(breed, quantity)
            response.setData(data)
        } catch (e) {
            response.setError(e.message)
        }
        res.json(response)
    })
}
