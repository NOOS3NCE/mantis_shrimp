import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import InfoCard from "../Cards/InfoCard";
import GearListCard from "../Cards/GearListCard";
import StatusCard from "../Cards/StatusCard";
import {Button} from "@mui/material";
import NewLensForm from "../Forms/NewLensForm";
import {AddCircleOutlined} from "@mui/icons-material";
import PageHeader from "./PageHeader";
import {base_url} from "../../../env_variables";
import NewCameraForm from "../Forms/NewCameraForm";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({})
    const [open, setOpen] = useState(false)
    const [lensOpen, setLensOpen] = useState(false)
    const [cameraOpen, setCameraOpen] = useState(false)
    const [cities, setCities] = useState([])
    const [kitRerender, kitRefresh] = useState(true)
    const [history, setHistory] = useState([])

    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/kit/${id}`)
        ])
            .then(res => {

                setKit(res[0].data)
                console.log("RES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [kitRerender])

    useEffect(() => {
        axios.get(`${base_url}mantis_api/history/kit/${id}`)
            .then(res => {
                setHistory(res?.data)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [kitRerender])

    useEffect(() => {
        axios.get(`${base_url}mantis_api/cities`)
            .then(res => {
                setCities(res.data)
                console.log("CITIES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])

    console.log("KIT DETAIL: ", kit)

    const SectionHeader = ({title, buttonOnClick, button}) => {
        return (
            <div
                className={'section-header p-2 rounded col-12 d-flex flex-row align-items-center justify-content-between'}>
                <h2>{title}</h2>
                {button &&
                <Button onClick={buttonOnClick} variant={'contained'} size={'small'}
                        className={'zoom bg-secondary col-4'}>ADD {title}</Button>}
            </div>
        )
    }

    return (
        <>

            <div style={{height: '60px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={kit?.kit_display?.toUpperCase()}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center`}>
                {lensOpen &&
                <div className={'page-container col-4 rounded mx-0'}>
                    < NewLensForm setLensOpen={setLensOpen} lensOpen={lensOpen} kitsRefresh={kitRefresh}
                                  kitsRerender={kitRerender}
                                  kit={kit}/>
                </div>}
                {cameraOpen &&
                <div className={'page-container col-4 rounded mx-0'}>
                    <NewCameraForm setCameraOpen={setCameraOpen} cameraOpen={cameraOpen} kitsRefresh={kitRefresh}
                                   kitsRerender={kitRerender} kit={kit}/>
                </div>}
                <div className={'col-8 d-flex justify-content-center'}>
                    <div
                        className={`page-container row d-flex flex-wrap flex-row justify-content-around rounded`}>
                        <div className={'row d-flex justify-content-end p-3 pb-1'}>
                            <Button style={{maxHeight: '50px'}} variant={'contained'} size={'large'}
                                    className={'zoom bg-secondary col-4 m-2'}>LOAD
                                OUT</Button>
                        </div>
                        <div className={'row flex-wrap'}>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <InfoCard header={<SectionHeader title={'INFO'}/>}
                                          kit={kit} setOpen={setOpen}
                                          open={open}/>
                            </div>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <StatusCard header={<SectionHeader title={'HISTORY'}/>} data={history}/>
                            </div>
                        </div>
                        <div className={'row flex-wrap'}>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <GearListCard header={<SectionHeader title={'CAMERAS'} button
                                                                     buttonOnClick={() => {
                                                                         setLensOpen(false)
                                                                         setCameraOpen(!cameraOpen)
                                                                     }}/>}
                                              items={kit.cameras}
                                              type={'cam'} addButton={<Button
                                    variant={'text'}
                                    size={'large'}
                                    className={'zoom m-2 p-2 text-secondary'}
                                    onClick={() => {
                                        setLensOpen(false)
                                        setCameraOpen(!cameraOpen)
                                    }}
                                ><AddCircleOutlined/></Button>}/>
                            </div>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <GearListCard header={<SectionHeader
                                    title={'LENSES'} button buttonOnClick={() => {
                                    setCameraOpen(false)
                                    setLensOpen(!lensOpen)
                                }}/>}
                                              items={kit.lenses}
                                              type={'lens'} addButton={<Button
                                    variant={'text'}
                                    size={'large'}
                                    className={'zoom m-2 p-2 text-secondary'}
                                    onClick={() => {
                                        setCameraOpen(false)
                                        setLensOpen(!lensOpen)
                                    }}
                                ><AddCircleOutlined/></Button>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackDetail