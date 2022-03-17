import React, {useEffect, useState} from "react";
import MantisCard from "./Cards/MantisCard";
import axios from "axios";
import PageHeader from "./Pages/PageHeader";
import FilterListHeader from "./Lists/FilterListHeader";
import ListHeader from "./Lists/ListHeader";
import NewKitForms from "./Forms/NewKitForms";
import {base_url} from "../../env_variables";
import {api, todoistProjectId} from "../../Todoist";
import {adminPage, currentlyLoggedIn} from "../Users/Login/Login";
import {useNavigate} from 'react-router-dom'

//TODO update add kit form
//TODO add create accessory form(s)


const Gear = () => {
    const [data, setData] = useState({})
    const [kitsRerender, kitsRefresh] = useState(true)
    const [open, setOpen] = useState(false)
    const [underlineFilter, setUnderlineFilter] = useState('')
    const [searchQuery, setSearchQuery] = useState()

    const headers = {
        kit: ['KIT', 'CITY', 'TYPE', 'STATUS', 'SHOOTER'],
        lens: ['LENS', 'KIT', 'BRAND', 'MODEL'],
        camera: ['CAMERA', 'KIT', 'BRAND', 'MODEL']
    }
    const columns = {
        kit: ['kit_display', 'city_code', 'kit_type', 'kit_status', 'user_firstname'],
        lens: ['lens_display', 'kit_display', 'lens_brand', 'lens_model'],
        camera: ['camera_display', 'kit_display', 'camera_brand', 'camera_model'],
    }
    const [listType, setListType] = useState('kit')
    const [listStateType, setListStateType] = useState('')
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)
    let searchedData = []
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
    if (data) {
        let newData = data[listType]
        searchedData = newData?.filter(pack => JSON.stringify(Object.values(pack)?.filter(item => item !== null)).toLowerCase().includes(searchQuery?.target?.value.toLowerCase() || ''))
    }
    //Pull all kits from DB
    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/kit`),
            axios.get(`${base_url}mantis_api/lens`),
            axios.get(`${base_url}mantis_api/camera`),
            axios.get(`${base_url}mantis_api/cities`)
        ])
            .then(res => {
                setLoading(false)
                setData({
                    kit: res[0].data,
                    lens: res[1].data,
                    camera: res[2].data,
                })
                setCities(res[3].data)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
        setOpen(false)
        searchedData = [data[listType]]
    }, [kitsRerender])
    console.log("CAMERAS:", data.camera)
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'GEAR'}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center align-items-start`}>
                {open &&
                <div className={'form-container col-4 rounded mx-0'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
                <div className={`page-container col rounded`}>
                    <FilterListHeader setUnderlineFilter={setUnderlineFilter}
                                      underlineFilter={underlineFilter}
                                      data={searchedData?.filter(item => listStateType !== '' ? item?.city_code === listStateType : true)}
                                      setOpen={() => setOpen}
                                      open={open}
                                      setListType={setListType}
                                      setCity={setListStateType}
                                      cities={cities}
                                      searchQuery={setSearchQuery}
                                      callback={() => setLoading(true)}/>
                    <ListHeader headers={headers[listType]}/>
                    <div className={`row d-flex justify-content-evenly col-12 text-white m-auto overflow-auto`}
                         style={{maxHeight: '73vh'}}>
                        {searchedData?.filter(data => underlineFilter !== '' ? data[`${listType}_status`] === underlineFilter : data).filter(item => listStateType !== '' ? item?.city_code === listStateType : true).map((kit, index) =>
                            <MantisCard
                                data={kit} id={kit[`${listType}_id`]} key={index} image={kit[`${listType}_img`]}
                                columns={columns[listType]}/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gear