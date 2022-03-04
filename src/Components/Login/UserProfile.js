import React from "react";
import PageHeader from "../Gear/Pages/PageHeader";
import SectionHeader from "../Gear/Cards/SectionHeader";
import UserInfoCard from "./UserInfoCard";
import {useNavigate} from "react-router-dom";
import {blankUser} from "./Login";

const UserProfile = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))[0]
    const navigate = useNavigate()

    const userLogout = () => {
        sessionStorage.setItem('user', JSON.stringify(blankUser))
        navigate('/login')
        window.location.reload(false);
    }
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={`${user?.user_firstname?.toUpperCase()} ${user?.user_lastname?.toUpperCase()}`}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center`}>
                <div className={'page-container col-12 rounded mx-0'}>
                    <div className={'col-12 m-0 p-2'}>
                        <UserInfoCard header={<SectionHeader title={'USER INFO'}
                                                             button
                                                             buttonText={'LOG OUT'}
                                                             buttonOnClick={() => userLogout()}/>}
                                      user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile