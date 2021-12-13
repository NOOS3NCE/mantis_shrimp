import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import HeroCard from "./HeroCard";
import InfoCard from "./InfoCard";
import GearListCard from "./GearListCard";
import StatusCard from "./StatusCard";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({});
    console.log("KIT ID: ", id)

    useEffect(() => {
        axios.get(`http://localhost:3001/kit/${id}`)
            .then(res => {
                setKit(res.data)
                console.log("RES: ", res)
            }, rej => (console.log(rej)))
            .catch(err => console.log(err))
    }, [])
    console.log("KIT DETAIL: ", kit)

    return (
        <>
            <div className={'d-flex justify-content-evenly col-10 offset-1 shadow'}>
                <div className={'col-5 m-2'}>
                    <HeroCard title={kit.display}/>
                    <GearListCard title={'Lenses'} items={kit.lenses}/>
                </div>
                <div className={'col-5 m-2'}>
                    <InfoCard kit={kit}/>
                    <StatusCard/>
                </div>
            </div>
        </>
    )
}

export default PackDetail