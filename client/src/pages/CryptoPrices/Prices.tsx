import React, { useEffect, useState } from 'react'
import './prices.css'

interface ApiResponse {
    time: {
        updated: string
        updatedISO: string
        updateduk: string
    }
    disclaimer: string
    chartName: string
    bpi: {
        [currency: string]: {
            code: string
            symbol: string
            rate: string
            description: string
            rate_float: number
        }
    }
}

const Prices = (): React.ReactElement => {
    const [bitcoinPrices, setBitcoinPrices] = useState<ApiResponse | null>(null)

    useEffect(() => {
        const fetchBitcoinPrices = async (): Promise<void> => {
            try {
                const response = await fetch(
                    'https://api.coindesk.com/v1/bpi/currentprice.json'
                )
                const data: ApiResponse = await response.json()
                setBitcoinPrices(data)
            } catch (error) {
                console.error('Error fetching Bitcoin prices:', error)
            }
        }

        fetchBitcoinPrices()
    }, [])

    const currencies: string[] = []
    for (const code in bitcoinPrices?.bpi) {
        currencies.push(code)
    }
    return (
        <>
            <h2>Bitcoin Price</h2>
            <div className="price-section">
                <div className="price-box">
                    {bitcoinPrices && (
                        <>
                            {currencies.map((currency, index) => (
                                <div key={index} className="price-item">
                                    <a href="#" className="price-item-link">
                                        <div className="price-item-bg"></div>
                                        <div className="price-item-title">
                                            {currency}
                                        </div>
                                        <div className="price-box-inner">
                                            <span className="price">
                                                Price:{' '}
                                                {
                                                    bitcoinPrices.bpi[currency]
                                                        .rate
                                                }
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Prices
