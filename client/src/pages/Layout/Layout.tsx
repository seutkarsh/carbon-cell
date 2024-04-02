import React from 'react'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = (): React.ReactElement => {
    return (
        <>
            <Topbar />
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layout
