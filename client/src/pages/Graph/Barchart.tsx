import { PopulationData } from './Charts'
import { ResponsiveBar } from '@nivo/bar'

interface Props {
    data: PopulationData[]
}
interface BarDatum {
    [key: string]: string | number
}

const Barchart = (props: Props): React.ReactElement => {
    const formattedData: BarDatum[] = props.data.map((data) => {
        return {
            year: data.Year,
            population: data.Population,
        }
    })
    const sampleData: BarDatum[] = [
        {
            year: 2020,
            population: 100,
        },
        {
            year: 2021,
            population: 150,
        },
        {
            year: 2022,
            population: 200,
        },
        {
            year: 2023,
            population: 220,
        },
        {
            year: 2024,
            population: 300,
        },
    ]
    return (
        <ResponsiveBar
            data={formattedData}
            keys={['population']}
            indexBy="year"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'pastel1' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#1d1d1d',
                    rotation: -45,
                    lineWidth: 3,
                    spacing: 10,
                },
            ]}
            fill={
                [
                    // {
                    //     match: {
                    //         id: 'fries',
                    //     },
                    //     id: 'dots',
                    // },
                    // {
                    //     match: {
                    //         id: 'sandwich',
                    //     },
                    //     id: 'lines',
                    // },
                ]
            }
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1.5]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Year',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Population',
                legendPosition: 'middle',
                legendOffset: -50,
                truncateTickAt: 0,
                format: (value) => `${value / 1000000}M`,
            }}
            // enableTotals={true}
            labelSkipWidth={12}
            labelSkipHeight={7}
            labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1.6]],
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
                e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
            }
        />
    )
}

export default Barchart
