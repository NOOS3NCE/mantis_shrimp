import React, {useState} from "react";
import {BackpackOutlined, HomeOutlined} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

const MantisSidebar = () => {
    const [home, setHome] = useState(['#303034', 'none'])
    const [gear, setGear] = useState(['#303034', 'none'])

    return (
        <>
            <div
                className={'mantis-sidebar main-sidebar bg-dark elevation-4 bg-dark sticky-top d-flex flex-column align-content-center min-vh-100'}>
                <NavLink
                    onMouseEnter={() => setHome(['#303034', '1px solid white'])}
                    onMouseLeave={() => setHome(['#303034', 'none'])}
                    style={({isActive}) => ({
                        color: '#f1faee',
                        'background-color': isActive ? '#faa307' : home[0],
                        'outline': isActive ? 'none' : home[1]
                    })}
                    className={`m-2 d-flex flex-column align-items-center justify-items-center rounded`}
                    to={"/home"}>
                    <HomeOutlined className={'my-1'} style={{width: '40px', height: '40px'}}/>
                </NavLink>
                <NavLink
                    onMouseEnter={() => setGear(['#303034', '1px solid white'])}
                    onMouseLeave={() => setGear(['#303034', 'none'])}
                    style={({isActive}) => ({
                        color: '#f1faee',
                        'background-color': isActive ? '#faa307' : gear[0],
                        'outline': isActive ? 'none' : gear[1]
                    })}
                    className={`m-2 d-flex flex-column align-items-center justify-items-center rounded`}
                    to={"/gear"}>
                    <BackpackOutlined className={'my-1'}
                                      style={{
                                          width: '40px',
                                          height: '40px'
                                      }}/>
                </NavLink>
            </div>

        </>
    )
}

export default MantisSidebar