import React, {useEffect, useState} from "react";
import PageHeader from "../Gear/Pages/PageHeader";
import axios from "axios";
import {base_url} from "../../env_variables";
import {Button} from "@mui/material";
import EventCard from "../Schedule/Cards/EventCard";
import {Link} from "react-router-dom";
import ListHeader from "../Gear/Lists/ListHeader";
import MantisCard from "../Gear/Cards/MantisCard";
import dayjs from "dayjs";

const Schedule = () => {
    // let faker = require('faker');
    const [events, setEvents] = useState([])
    const [clients, setClients] = useState([])
    const columns = ["event_date", "primary_client_firstname", "secondary_client_firstname", "venue_name", "venue_city", "venue_state"]

    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/event`),
            axios.get(`${base_url}mantis_api/client`)
        ])
            .then(res => {
                setEvents(res[0].data.map(event => ({
                    ...event,
                    primary_client_firstname: res[1]?.data?.filter(data => data.event_id === event.event_id)[0]?.client_firstname,
                    secondary_client_firstname: res[1]?.data?.filter(data => data.event_id === event.event_id)[1]?.client_firstname,
                    event_date: dayjs(event.event_date).format('MM/DD/YY')
                })))
                setClients(res[1].data)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])
    console.log("EVENTS", events)
    console.log("CLIENTS", clients)
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
                <PageHeader title={"EVENTS"}/>
            </div>
            <div className={'d-flex col-12 flex-row justify-content-center'}>
                <div className={'page-container col-10 rounded'}>
                    <Link to={"/sales/event/new"} className={'text-decoration-none'}>
                        <Button variant={'contained'} className={'bg-mint text-decoration-none'}>ADD EVENT</Button>
                    </Link>
                    <div>
                        <ListHeader headers={["Event Date", "Bride", "Groom", "Venue", "City", "State"]} offset={0}
                                    justify={'start'}/>
                        <div className={`row d-flex justify-content-evenly col-12 text-white m-auto overflow-auto`}
                             style={{maxHeight: '73vh'}}>
                            {events?.map((event, index) =>
                                <MantisCard
                                    data={event} id={event?.event_id} key={index}
                                    columns={columns} link={'/sales/client/'}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule