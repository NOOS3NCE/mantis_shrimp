import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
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
import {api} from "../../../Todoist";
import {adminPage} from "../../Login/Login";
import SectionHeader from "../Cards/SectionHeader";

const PackDetail = () => {
    let navigate = useNavigate()
    adminPage(navigate)
    const {id} = useParams()
    const [kit, setKit] = useState({})
    const [open, setOpen] = useState(false)
    const [lensOpen, setLensOpen] = useState(false)
    const [cameraOpen, setCameraOpen] = useState(false)
    const [cities, setCities] = useState([])
    const [kitRerender, kitRefresh] = useState(true)
    const [history, setHistory] = useState([])
    const [todos, setTodos] = useState([])


    useEffect(() => {
        Promise.all([
            axios.get(`${base_url}mantis_api/kit/${id}`),
            axios.get(`${base_url}mantis_api/history/kit/${id}`),
            axios.get(`${base_url}mantis_api/cities`),
        ])
            .then(res => {
                setKit(res[0]?.data)
                setHistory(res[1]?.data)
                setCities(res[2]?.data)
                if (res[0]?.data?.todoist_label_id !== null) {

                    api.getTasks({label_id: res[0]?.data?.todoist_label_id})
                        .then(res => setTodos(res))
                        .catch(err => console.log("TODOIST ERROR: ", err))
                }
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [kitRerender])


    console.log("TODOS", todos)
    return (
        <>

            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
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
                                          open={open} todos={todos}/>
                            </div>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <StatusCard header={<SectionHeader title={'HISTORY'}/>} data={history}/>
                            </div>
                        </div>
                        <div className={'row flex-wrap'}>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <GearListCard
                                    items={kit.cameras}
                                    header={<SectionHeader
                                        title={'CAMERAS'}
                                        button buttonText={'ADD CAMERA'}
                                        buttonOnClick={() => {
                                            setLensOpen(false)
                                            setCameraOpen(!cameraOpen)
                                        }}/>}
                                />
                            </div>
                            <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                                <GearListCard
                                    items={kit.lenses}
                                    header={<SectionHeader
                                        title={'LENSES'}
                                        button buttonText={'ADD LENS'}
                                        buttonOnClick={() => {
                                            setCameraOpen(false)
                                            setLensOpen(!lensOpen)
                                        }}/>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackDetail