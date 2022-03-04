import React, {useEffect, useState} from "react";
import {GoogleLogin} from 'react-google-login';
import PageHeader from "../Gear/Pages/PageHeader";
import axios from "axios";
import {base_url} from "../../env_variables";
import {useNavigate} from "react-router-dom";

export const blankUser = {
    user_admin_level: ''
}
console.log("ENV :", process.env.NODE_ENV)
export const adminLevels = ['dev', 'manager']
export const adminPage = (navigate) => {
    if (!adminLevels.includes(currentlyLoggedIn()[0]?.user_auth_level)) {
        navigate('/login')
    }
}

export const currentlyLoggedIn = () => {
    !sessionStorage.getItem('user') && sessionStorage.setItem('user', JSON.stringify({}))
    return JSON.parse(sessionStorage.getItem('user'))
}

const Login = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${base_url}mantis_api/user`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const responseGoogleSuccess = (response) => {
        let profileObj = response.profileObj
        console.log("PROFILE OBJECT", profileObj)
        let newUserObj = {
            user_firstname: profileObj.givenName,
            user_lastname: profileObj.familyName,
            user_email: profileObj.email,
            user_google_id: profileObj.googleId,
            user_img: profileObj.imageUrl,
            user_auth_level: "shooter"
        }

        let currentUser = users.filter(user => user.user_google_id === profileObj.googleId)
        console.log("CURRENT USER:", currentUser)
        currentUser?.length ? sessionStorage.setItem('user', JSON.stringify(currentUser))
            : axios.post(`${base_url}mantis_api/user`, newUserObj)
                .then(res => {
                    console.log("NEW USER OBJ:", newUserObj)
                    sessionStorage.setItem('user', JSON.stringify(newUserObj))
                    console.log("SUCCESSFUL NEW USER: ", res)
                })
        navigate('/')
        window.location.reload(false);
    }

    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'LOGIN'}/>
            </div>
            <div className={'col-12 d-flex flex-column justify-content-end align-items-center'}
                 style={{height: '50vh'}}>
                <div
                    className={'page-container rounded col-md-4 col-sm-12 shadow d-flex flex-column justify-content-around align-items-center'}
                    style={{height: '400px'}}>
                    <h1>LOGIN</h1>
                    <GoogleLogin
                        clientId={process.env.NODE_ENV === 'production' ? "799204705697-g9apm6caa8g9k4097sdtdho0nlcroquk.apps.googleusercontent.com" : "799204705697-sgs81tdg4oh6lshbsckpst74qqrd6f42.apps.googleusercontent.com"}
                        buttonText="Login"
                        onSuccess={responseGoogleSuccess}
                        cookiePolicy={'single_host_origin'}
                        className={'col-6'}
                    />
                </div>
            </div>
        </>
    )
}

export default Login