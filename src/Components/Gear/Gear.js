import React, {useEffect, useState} from "react";
import MantisCard from "./Cards/MantisCard";
import axios from "axios";
import PageHeader from "./Pages/PageHeader";
import FilterListHeader from "./Lists/FilterListHeader";
import ListHeader from "./Lists/ListHeader";
import NewKitForms from "./Forms/NewKitForms";
import {base_url} from "../../env_variables";

//TODO update add kit form
//TODO add create lens form
//TODO add create camera form
//TODO add create accessory form(s)

const Gear = () => {
    const [kits, setKits] = useState([])
    const [lenses, setLenses] = useState([])
    const [cameras, setCameras] = useState([])
    const [kitsRerender, kitsRefresh] = useState(true)
    const [lensRerender, lensRefresh] = useState(true)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [underlineFilter, setUnderlineFilter] = useState('')
    const [headers, setHeaders] = useState(['KIT', 'CITY', 'TYPE', 'STATUS', 'SHOOTER'])

    //Pull all kits from DB
    useEffect(() => {
        axios.get(`${base_url}mantis_api/kit`)
            .then(res => {
                (setData(res.data))
                (setKits(res.data))
            }, rej => console.log(rej))
            .catch(err => console.log(err))
        setOpen(false)
    }, [kitsRerender])

    // Pull all lenses from DB
    useEffect(() => {
        axios.get(`${base_url}mantis_api/lens`)
            .then(res => (setLenses(res.data.map(lens => ({
                ...lens
            })))), rej => console.log(rej))
            .catch(err => console.log(err))
    }, [lensRerender])

    useEffect(() => {
        setData([...kits.filter(kit => kit.kit_status.includes(underlineFilter))])
    }, [underlineFilter])

    return (
        <>
            <div style={{height: '60px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'GEAR'}/>
            </div>
            <div className={'mantis-modal row d-flex justify-content-center'}>
                {open &&
                <div className={'page-container col-4 rounded mx-0'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
                <div className={`page-container col-${open ? '6' : '10'} rounded`}>
                    <FilterListHeader setUnderlineFilter={setUnderlineFilter}
                                      underlineFilter={underlineFilter}
                                      kits={kits}
                                      setOpen={() => setOpen}
                                      open={open}/>
                    <ListHeader headers={headers}/>
                    <div className={`row d-flex justify-content-evenly col-12 text-white m-auto`}>
                        {data?.map((kit, index) =>
                            <MantisCard
                                data={kit} id={kit?.kit_id} key={index}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gear