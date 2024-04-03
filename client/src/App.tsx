import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Charts from './pages/Graph/Charts'
import Prices from './pages/CryptoPrices/Prices'

const App = (): React.ReactElement => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/charts" element={<Charts />} />
                        <Route path="/prices" element={<Prices />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
