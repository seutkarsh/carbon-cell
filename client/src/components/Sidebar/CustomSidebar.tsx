import React, { useState } from 'react'
import './sidebar.css'
import 'react-pro-sidebar/dist/css/styles.css'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined'
import { Link } from 'react-router-dom'

const CustomSidebar = (): React.ReactElement => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')
    return (
        <div className="custom-sidebar">
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: 'grey',
                        }}
                    >
                        {!isCollapsed && (
                            <div className="brand">
                                <h3>BrandName</h3>
                                <button
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <MenuOutlinedIcon />
                                </button>
                            </div>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <div className="user-section">
                            <div className="profile-picture">
                                <img
                                    src="https://lh5.googleusercontent.com/proxy/dKDCmhPUzJ0SYwqovCth3EO3xRpAJ0JVTPjcSbvZQCaQPBLzZ_-Lerk053elpVaKkEkcO3xRhQZGDRvn6ZEtgohI0KQdCOLYoTMih7AoGwYYljhtwpO1GBd-Vozv3QwsJ-lF"
                                    alt="profile-user"
                                />
                            </div>
                            <div className="user-info">
                                <h2>Utkarsh</h2>
                                <h5>Full Stack Developer</h5>
                            </div>
                        </div>
                    )}
                    <div className={isCollapsed ? '' : 'item-section'}>
                        <MenuItem
                            active={selected === 'Charts'}
                            onClick={() => setSelected('Charts')}
                            icon={<AutoGraphOutlinedIcon />}
                        >
                            <h4>Charts</h4>
                            <Link to="/charts" />
                        </MenuItem>
                        <MenuItem
                            active={selected === 'Prices'}
                            onClick={() => setSelected('Prices')}
                            icon={<CurrencyBitcoinOutlinedIcon />}
                        >
                            <h4>Crypto Prices</h4>
                            <Link to="/prices" />
                        </MenuItem>
                    </div>
                </Menu>
            </ProSidebar>
        </div>
    )
}

export default CustomSidebar
