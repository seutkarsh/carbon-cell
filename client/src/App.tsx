import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import BarGraph from './pages/Graph/BarGraph'

const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/bargraph" element={<BarGraph />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
