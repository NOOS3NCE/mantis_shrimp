import React, {useEffect, useState} from "react";
import PageHeader from "../../Gear/Pages/PageHeader";
import {useParams} from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";
import {base_url} from "../../../env_variables";
import {Button} from "@mui/material";
import InfoCard from "../../Gear/Cards/InfoCard";
import SectionHeader from "../../Gear/Cards/SectionHeader";
import StatusCard from "../../Gear/Cards/StatusCard";
import EventInfoCard from "./EventInfoCard";
import ClientInfoCard from "./ClientInfoCard";
import WeatherInfoCard from "./WeatherInfoCard";

const EventDetails = (props) => {
    const {data} = props
    const {id} = useParams();
    const [event, setEvent] = useState({})

    useEffect(() => {
        axios.get(`${base_url}mantis_api/event/${id}`)
            .then(res => setEvent(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log("EVENT", event)
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader
                    title={`${event.primary_contact?.client_firstname} & ${event.secondary_contact?.client_firstname} - ${dayjs(event.event_date).format("MM/DD/YYYY")} `}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center align-items-start`}>
                <div
                    className={`page-container d-flex flex-wrap flex-row justify-content-around rounded`}>
                    <div className={'row flex-wrap'}>
                        <div className={'col-xl-6 col-lg-12 m-0 p-2  details-card'}>
                            <ClientInfoCard data={event} header={<SectionHeader title={'CLIENT INFO'}/>}/>
                        </div>
                        <div className={'col-xl-6 col-lg-12 m-0 p-2  details-card'}>
                            <EventInfoCard data={event} header={<SectionHeader title={'EVENT INFO'}/>}
                                           weather={<WeatherInfoCard data={event} header={<SectionHeader
                                               title={'WEATHER INFO'}/>}/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventDetails