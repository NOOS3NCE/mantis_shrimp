import {NavLink} from "react-router-dom";
import {currentlyLoggedIn, adminLevels} from "../Users/Login/Login";

const MantisSidebar = () => {
    console.log("ADMIN LEVELS:", adminLevels.includes(currentlyLoggedIn()[0]?.user_auth_level))
    console.log("AUTH LEVEL:", currentlyLoggedIn()[0]?.user_auth_level)
    return (
        <>
            <div
                className={'shadow mantis-sidebar main-sidebar bg-glass sticky-top d-flex flex-column align-content-center min-vh-100 justify-content-between'}>
                <div>
                    {!currentlyLoggedIn()[0]?.user_firstname &&
                    <NavLink to={'/login'}
                             className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}>
                        <p>LOGIN</p></NavLink>}
                    {currentlyLoggedIn()[0]?.user_firstname &&
                    <NavLink to={`/user/me`}
                             className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}>
                        <div className={'col-12 d-flex flex-row justify-content-around align-items-center'}>
                            <img src={currentlyLoggedIn()[0]?.user_img}
                                 style={{height: '30px', width: '30px', borderRadius: '100%'}}/>
                            <p>PROFILE</p></div>
                    </NavLink>}
                    <NavLink
                        style={({isActive}) => ({
                            backgroundColor: isActive && '#E3E3E326',
                            color: isActive && '#F0F0F0',
                            textDecoration: 'none',
                            borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                        })}
                        className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                        to={"/"}>
                        <p>HOME</p>
                    </NavLink>
                    {adminLevels.includes(currentlyLoggedIn()[0]?.user_auth_level) &&
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
                    }
                    <NavLink
                        style={({isActive}) => ({
                            backgroundColor: isActive && '#E3E3E326',
                            color: isActive && '#F0F0F0',
                            textDecoration: 'none',
                            borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                        })}
                        className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                        to={"/schedule"}>
                        <p>SHOOTS</p>
                    </NavLink>
                    {adminLevels.includes(currentlyLoggedIn()[0]?.user_auth_level) &&
                    <NavLink
                        style={({isActive}) => ({
                            backgroundColor: isActive && '#E3E3E326',
                            color: isActive && '#F0F0F0',
                            textDecoration: 'none',
                            borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                        })}
                        className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                        to={"/sales"}>
                        <p>SALES</p>
                    </NavLink>
                    }
                    {adminLevels.includes(currentlyLoggedIn()[0]?.user_auth_level) &&
                    <NavLink
                        style={({isActive}) => ({
                            backgroundColor: isActive && '#E3E3E326',
                            color: isActive && '#F0F0F0',
                            textDecoration: 'none',
                            borderRight: isActive ? '5px solid #0DCCAA' : '5px solid #00000000',
                        })}
                        className={`sb-item p-3 d-flex flex-column align-items-center justify-items-center`}
                        to={"/user"}>
                        <p>USERS</p>
                    </NavLink>
                    }
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default MantisSidebar