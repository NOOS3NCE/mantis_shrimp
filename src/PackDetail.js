import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import HeroCard from "./HeroCard";
import InfoCard from "./InfoCard";
import GearListCard from "./GearListCard";
import StatusCard from "./StatusCard";
import {MenuItem, Select, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({})
    const [open, setOpen] = useState(false)
    const [cities, setCities] = useState([])
    const {control} = useForm()
    console.log("KIT ID: ", id)

    useEffect(() => {
        axios.get(`http://localhost:3001/kit/${id}`)
            .then(res => {
                setKit(res.data)
                console.log("RES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3001/cities')
            .then(res => {
                setCities(res.data)
                console.log("CITIES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])
    console.log("KIT DETAIL: ", kit)

    return (
        <>
            <div className={`row ${open && 'd-flex justify-content-around'}`}>
                <div
                    className={`d-flex justify-content-evenly col-${open ? 8 : 10} offset-${open ? 0 : 1} shadow rounded mt-2 bg-dark`}>
                    <div className={'col-sm-12 col-md-5  m-2'}>
                        <HeroCard title={kit.kit_display} id={kit.kit_id}/>
                        <GearListCard title={'Lenses'} items={kit.lenses}/>
                    </div>
                    <div className={' col-sm-12 col-md-5 m-2'}>
                        <InfoCard kit={kit} setOpen={setOpen} open={open}/>
                        <StatusCard/>
                    </div>
                </div>
                {open && <div className={'d-flex justify-items-start col-3 m-2 mx-0 rounded'}>
                    <form>
                        <div className={'row'}>
                            <h3> Edit</h3>
                        </div>
                        <label>Kit Name</label>
                        <TextField
                            className={'col-12 mt-2 bg-white rounded'}
                            defaultValue={kit.kit_display}/>
                        <Select label={'City'}
                                controller={control}
                                size={'large'}
                                className={'col-12 mt-2 bg-white rounded'}
                                defaultValue={kit.city_id}>
                            {cities.map(city => <MenuItem value={city.city_id}>{city.city_code}</MenuItem>)}
                        </Select>
                    </form>
                </div>}
            </div>
        </>
    )
}

export default PackDetail