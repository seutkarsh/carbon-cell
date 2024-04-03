import React, { useEffect, useState } from 'react'
import Barchart from './Barchart'
import './charts.css'

export interface PopulationData {
    IDNation: string
    Nation: string
    IDYear: number
    Year: string
    Population: number
    SlugNation: string
}
const Charts = (): React.ReactElement => {
    const [populationData, setPopulationData] = useState<PopulationData[]>([])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await fetch(
                    'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
                )
                const data = await response.json()
                setPopulationData(data.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className="chart">
            <h2 className="chart-heading">
                Bar Chart Visualizing Population Data on USA 2013-2021
            </h2>
            <div className="chart-container">
                <Barchart data={populationData} />
            </div>
        </div>
    )
}
export default Charts
