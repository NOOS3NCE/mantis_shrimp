import React, {useEffect, useState} from "react";
import MantisCard from "./Cards/MantisCard";
import axios from "axios";
import PageHeader from "./Pages/PageHeader";
import FilterListHeader from "./Lists/FilterListHeader";
import ListHeader from "./Lists/ListHeader";
import NewKitForms from "./Forms/NewKitForms";
import {base_url} from "../../env_variables";
import {api, todoistProjectId} from "../../Todoist";
import {adminPage, currentlyLoggedIn} from "../Login/Login";
import {useNavigate} from 'react-router-dom'

//TODO update add kit form
//TODO add create accessory form(s)


const Gear = () => {
    const [data, setData] = useState({})
    const [kitsRerender, kitsRefresh] = useState(true)
    const [open, setOpen] = useState(false)
    const [underlineFilter, setUnderlineFilter] = useState('')
    const headers = {
        kit: ['KIT', 'CITY', 'TYPE', 'STATUS', 'SHOOTER'],
        lens: ['LENS', 'KIT', 'BRAND', 'MODEL'],
        camera: []
    }
    const [listType, setListType] = useState('kit')
    let navigate = useNavigate()
    adminPage(navigate)
    // useEffect(() => {
    //     api.addTask({
    //         content: 'Transfer to Tulsa',
    //         dueString: 'next Tuesday at 12:00',
    //         project_id: todoistProjectId,
    //         label_ids: [2159907740],
    //         section_id: 80977393,
    //     })
    //         .then((task) => console.log(task))
    //         .catch((error) => console.log(error))
    // }, [])

    //Pull all kits from DB
    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/kit`),
            axios.get(`${base_url}mantis_api/lens`),
            axios.get(`${base_url}mantis_api/camera`)
        ])
            .then(res => {
                setData({
                    kit: res[0].data,
                    lens: res[1].data,
                    camera: res[2].data
                })
            }, rej => console.log(rej))
            .catch(err => console.log(err))
        setOpen(false)
    }, [kitsRerender])
    console.log("CAMERAS:", data.camera)
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'GEAR'}/>
            </div>
            <div className={'mantis-modal row d-flex justify-content-center overflow-hidden'}>
                {open &&
                <div className={'page-container col-4 rounded mx-0'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
                <div className={`page-container col-${open ? '6' : '10'} rounded`}>
                    <FilterListHeader setUnderlineFilter={setUnderlineFilter}
                                      underlineFilter={underlineFilter}
                                      data={data[listType]}
                                      setOpen={() => setOpen}
                                      open={open}
                                      setListType={setListType}
                                      listType={listType}/>
                    <ListHeader headers={headers[listType]}/>
                    <div className={`row d-flex justify-content-evenly col-12 text-white m-auto overflow-auto`}
                         style={{maxHeight: '73vh'}}>
                        {data[listType]?.filter(data => underlineFilter !== '' ? data[`${listType}_status`] === underlineFilter : data).map((kit, index) =>
                            <MantisCard
                                data={kit} id={kit[`${listType}_id`]} key={index}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gear