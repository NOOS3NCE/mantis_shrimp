import React, {useEffect, useState} from "react";
import MantisCard from "./MantisCard";
import axios from "axios";
import {Button} from "@mui/material";
import NewKitForms from "./NewKitForms";


const Gear = () => {
    const [kits, setKits] = useState([])
    const [lenses, setLenses] = useState([])
    const [kitsRerender, kitsRefresh] = useState(true)
    const [lensRerender, lensRefresh] = useState(true)
    const [open, setOpen] = useState(false)
    const [cityList, setCityList] = useState([])
    const [cityFilter, setCityFilter] = useState(true)
    let citySet = new Set()
    //Use a Set to pull all cities that have kits
    useEffect(() => {
        kits.forEach(kit => citySet.add(kit.city_code))
        setCityList([...citySet])
        console.log("CITY SET:", citySet)
    }, [kits])

    //Pull all kits from DB
    useEffect(() => {
        axios.get('http://localhost:3001/kit')
            .then(res => (setKits(res.data.map(kit => ({
                ...kit
            })))), rej => console.log(rej))
            .catch(err => console.log(err))
        setOpen(false)

    }, [kitsRerender])

    // Pull all lenses from DB
    useEffect(() => {
        axios.get('http://localhost:3001/lens')
            .then(res => (setLenses(res.data.map(lens => ({
                ...lens
            })))), rej => console.log(rej))
            .catch(err => console.log(err))
    }, [lensRerender])

    //Pull all cameras from DB
    // useEffect(()=> {
    //     axios.get('http://localhost:3001/camera')
    //         .then(res => (setCameras(res.data.map(camera => ({
    //             ...camera
    //         })))), rej => console.log(rej))
    //             .catch(err => console.log(err))
    // }, [camerasRerender)

    return (
        <>
            <div
                className={'row sticky-top bg-abyss shadow d-flex justify-content-around align-items-center p-2'}>
                <h2 className={'col-2 m-0'}>KITS</h2>
                <Button
                    variant={'contained'}
                    size={'large'}
                    className={'zoom col-2 m-0 bg-secondary'}
                    onClick={() => setOpen(!open)}
                >ADD KIT</Button>
                {open &&
                <div className={'mantis-modal row d-flex justify-content-center mt-2'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
            </div>
            <div className={'row d-flex justify-content-center'}>
                <div className={'row d-flex justify-content-evenly col-10 text-white mt-2'}>
                    {kits?.map(kit =>
                        <MantisCard
                            name={kit.kit_display.toUpperCase()} location={kit.city_code}
                            loadedout={kit.kit_loadedout} key={kit.kit_id} id={kit.kit_id}
                            shooter={kit.user_firstname}
                            type={kit.kit_type.toUpperCase()}/>)}
                </div>
            </div>
        </>
    )
}

export default Gear