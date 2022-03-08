import React, {useEffect, useState} from "react";
import PageHeader from "../Gear/Pages/PageHeader";
import UserInfoCard from "./UserInfoCard";
import SectionHeader from "../Gear/Cards/SectionHeader";
import GearListCard from "../Gear/Cards/GearListCard";
import {useParams} from "react-router-dom";
import axios from "axios";
import {base_url} from "../../env_variables";

const UserDetails = () => {
    const {id} = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`${base_url}mantis_api/user/${id}`)
            .then(res => {
                    console.log("USER: ", res.data)
                    setUser(...res.data)
                }
            )
    }, [])
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={`${user?.user_firstname?.toUpperCase()} ${user?.user_lastname?.toUpperCase()}`}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center`}>
                <div className={'page-container col-12 rounded mx-0'}>
                    <div className={'col-12 m-0 p-2'}>
                        <UserInfoCard header={<SectionHeader title={'USER INFO'}
                        />}
                                      user={user}/>
                    </div>
                    <div className={'row flex-wrap'}>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <GearListCard
                                header={<SectionHeader
                                    title={'GEAR'}
                                />}
                            />
                        </div>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <GearListCard
                                header={<SectionHeader
                                    title={'SHOOTS'}
                                />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails