import React, {useEffect, useState} from "react";
import MantisCard from "./Cards/MantisCard";
import axios from "axios";
import PageHeader from "./Pages/PageHeader";
import FilterListHeader from "./Lists/FilterListHeader";
import ListHeader from "./Lists/ListHeader";
import NewKitForms from "./Forms/NewKitForms";

require('dotenv').config()
console.log(process.env.NODE_ENV)

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
    const env = process.env.NODE_ENV
    const base_url = env === 'development' ? 'http://localhost:3001/' : 'https://wildorchid.one/'
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

    console.log("DATA: ", data)
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
            {/*<div*/}
            {/*    className={'row sticky-top bg-abyss d-flex shadow-p justify-content-around align-items-center p-2'}>*/}
            {/*    <h2 className={'col-2 m-0'}>GEAR</h2>*/}
            {/*    <Button onClick={() => setData([...kits])} variant={'text'} className={'zoom col-1 text-white'}>*/}
            {/*        <div className={'col'}><BackpackOutlined style={{'font-size': '40px'}}/></div>*/}
            {/*    </Button>*/}
            {/*    <Button onClick={() => setData([...cameras])} variant={'text'} className={'zoom col-1 text-white'}>*/}
            {/*        <div className={'col'}><CameraAltOutlined style={{'font-size': '40px'}}/></div>*/}
            {/*    </Button>*/}
            {/*    <Button onClick={() => setData([...lenses])} variant={'text'} className={'zoom col-1 text-white'}>*/}
            {/*        <div className={'col'}><CameraOutlined style={{'font-size': '40px'}}/></div>*/}
            {/*    </Button>*/}
            {/*    <Button*/}
            {/*        variant={'contained'}*/}
            {/*        size={'large'}*/}
            {/*        className={'zoom col-2 m-0 bg-secondary'}*/}
            {/*        onClick={() => setOpen(!open)}*/}
            {/*    >ADD KIT</Button>*/}
            {/*    {open &&*/}
            {/*    <div className={'mantis-modal row d-flex justify-content-center mt-2'}>*/}
            {/*        <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>*/}
            {/*    </div>}*/}
            {/*</div>*/}
            <div className={'m-auto'}>
                <PageHeader title={'GEAR'}/>
            </div>
            <div className={'mantis-modal row d-flex justify-content-center mt-2'}>
                {open &&
                <div className={'page-container col-4 rounded mx-0'}>
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}/>
                </div>}
                <div className={`page-container mx-2 col-${open ? '6' : '8'} rounded`}>
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