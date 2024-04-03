import React from 'react'
import './layout.css'
import Topbar from '../../components/Topbar/Topbar'
import CustomSidebar from '../../components/Sidebar/CustomSidebar'
import { Outlet } from 'react-router-dom'

const Layout = (): React.ReactElement => {
    return (
        <>
            <CustomSidebar />
            <main>
                <Topbar />
                <Outlet />
            </main>
        </>
    )
}

export default Layout
