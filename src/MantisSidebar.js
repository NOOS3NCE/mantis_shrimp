import React, {useState} from "react";
import {BackpackOutlined, HomeOutlined} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

const MantisSidebar = () => {

    return (
        <>
            <div
                className={'shadow mantis-sidebar main-sidebar bg-dark elevation-4 bg-dark sticky-top d-flex flex-column align-content-center min-vh-100'}>
                <NavLink
                    style={({isActive}) => ({
                        color: isActive && '#F0F0F0',
                        'background-color': isActive ? '#faa307' : '#00000000',
                    })}
                    className={`sb-icon m-2 d-flex flex-column align-items-center justify-items-center rounded`}
                    to={"/home"}>
                    <HomeOutlined className={'my-1'} style={{width: '40px', height: '40px'}}/>
                </NavLink>
                <NavLink
                    style={({isActive}) => ({
                        color: isActive && '#F0F0F0',
                        'background-color': isActive ? '#faa307' : '#00000000',
                    })}
                    className={`sb-icon m-2 d-flex flex-column align-items-center justify-items-center rounded`}
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