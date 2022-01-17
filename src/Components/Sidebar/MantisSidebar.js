import React from "react";
import {NavLink} from "react-router-dom";

const MantisSidebar = () => {

    return (
        <>
            <div
                className={'shadow mantis-sidebar main-sidebar bg-glass sticky-top d-flex flex-column align-content-center min-vh-100'}>
                <NavLink
                    style={({isActive}) => ({
                        backgroundColor: isActive && '#E3E3E326',
                        color: isActive && '#F0F0F0',
                        textDecoration: 'none',
                        borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                    })}
                    className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                    to={"/home"}>
                    <p>HOME</p>
                </NavLink>
                <NavLink
                    style={({isActive}) => ({
                        backgroundColor: isActive && '#E3E3E326',
                        color: isActive && '#F0F0F0',
                        textDecoration: 'none',
                        borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                    })}
                    className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                    to={"/gear"}>
                    <p>GEAR</p>
                </NavLink>
            </div>

        </>
    )
}

export default MantisSidebar