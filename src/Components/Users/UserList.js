import React, {useEffect, useState} from "react";
import PageHeader from "../Gear/Pages/PageHeader";
import NewKitForms from "../Gear/Forms/NewKitForms";
import FilterListHeader from "../Gear/Lists/FilterListHeader";
import ListHeader from "../Gear/Lists/ListHeader";
import MantisCard from "../Gear/Cards/MantisCard";
import axios from "axios";
import {base_url} from "../../env_variables";

const UserList = () => {
    const [users, setUsers] = useState()
    const [cities, setCities] = useState()
    const [listStateType, setListStateType] = useState()
    const [open, setOpen] = useState(false)
    const [kitsRerender, kitsRefresh] = useState()
    const columns = ['user_firstname', 'user_lastname', 'city_code', 'user_email']

    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/user`),
            axios.get(`${base_url}mantis_api/cities`)
        ])
            .then(res => {
                setUsers(res[0].data)
                setCities(res[1].data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'USERS'}/>
            </div>
            <div className={'mantis-modal row d-flex justify-content-center overflow-hidden'}>
                {open &&
                <div className={'page-container col-4 rounded mx-0'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
                <div className={`page-container col-${open ? '6' : '10'} rounded`}>
                    <FilterListHeader
                        setCity={setListStateType}
                        cities={cities}/>
                    <ListHeader headers={["First Name", "Last Name", "City", "Email"]}/>
                    <div className={`row d-flex justify-content-evenly col-12 text-white m-auto overflow-auto`}
                         style={{maxHeight: '73vh'}}>
                        {users?.filter(item => listStateType !== '' ? item?.city_code === listStateType : true).map((user, index) =>
                            <MantisCard
                                data={user} id={user?.user_id} key={index}
                                image={user?.user_img !== null ? user?.user_img : 'https://i.imgur.com/9LDfN2H.png'}
                                columns={columns} link={'/user/'}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList