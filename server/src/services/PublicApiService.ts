import { Service } from 'typedi'
import { IDog, IDogs } from '../api/responses/dog'

@Service()
export class PublicApiService {
    async getAllDogs(): Promise<IDogs> {
        const apiResponse = await fetch('https://dog.ceo/api/breeds/list/all')
        const apiData: IApiResponse = await apiResponse.json()
        if (apiData.status != 'success')
            throw new Error('Error Fetching Public API')

        const dogs: IDog[] = []
        for (const dog in apiData.message) {
            dogs.push({ name: dog.toString(), subBreed: apiData.message[dog] })
        }
        return {
            dogs,
        }
    }

    async getDogImages(
        breed: string,
        quantity: string | undefined
    ): Promise<string[]> {
        const apiResponse = await fetch(
            `https://dog.ceo/api/breed/${breed}/images`
        )

        const apiData: IImageApiResponse = await apiResponse.json()
        if (apiData.status != 'success')
            throw new Error('Error Fetching Public API')
        if (quantity) return apiData.message.slice(0, parseInt(quantity))
        return apiData.message
    }
}
export interface IApiResponse {
    message: Record<string, string[]>
    status: string
}

export interface IImageApiResponse {
    message: string[]
    status: string
}
