import React from 'react'
import './topbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

const Topbar = (): React.ReactElement => {
    return (
        <div className="topbar">
            <div className="search">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <SearchOutlinedIcon />
                </div>
            </div>
            <h2>Assignment</h2>
            <div className="options">
                <SettingsOutlinedIcon />
                <HelpOutlineOutlinedIcon />
                <AccountCircleOutlinedIcon />
            </div>
        </div>
    )
}
export default Topbar
