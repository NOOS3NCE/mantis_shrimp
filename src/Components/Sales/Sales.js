import React, {useEffect, useState} from "react";
import PageHeader from "../Gear/Pages/PageHeader";
import axios from "axios";
import {base_url} from "../../env_variables";
import {Button} from "@mui/material";
import EventCard from "../Schedule/Cards/EventCard";
import {Link} from "react-router-dom";

const Schedule = () => {
    // let faker = require('faker');
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get(`${base_url}mantis_api/event`)
            .then(res => {
                setEvents(res.data)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])

    // const addClient = () => {
    //     let fakeClient = {
    //         client_firstname: faker.name.firstName(),
    //         client_lastname: faker.name.lastName(),
    //         client_phone: faker.phone.phoneNumber(),
    //         client_email: faker.internet.email(),
    //         client_address1: faker.address.streetAddress(),
    //         client_address2: faker.address.secondaryAddress(),
    //         client_city: faker.address.city(),
    //         client_state: faker.address.stateAbbr(),
    //         client_zip: faker.address.zipCodeByState()
    //     }
    //     console.log("FAKE CLIENT: ", fakeClient)
    //     axios.post(`${base_url}mantis_api/client`, fakeClient)
    //         .then(res => console.log("RES FROM POST", res))
    // }
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={"SALES"}/>
            </div>
            <div className={'d-flex col-12 flex-row justify-content-center'}>
                <div className={'page-container col-10 rounded'}>
                    <Link to={"/sales/event/new"} className={'text-decoration-none'}>
                        <Button variant={'contained'} className={'bg-mint text-decoration-none'}>ADD EVENT</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Schedule