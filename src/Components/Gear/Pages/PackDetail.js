import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import InfoCard from "../Cards/InfoCard";
import GearListCard from "../Cards/GearListCard";
import StatusCard from "../Cards/StatusCard";
import {Button, MenuItem, Select, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import NewLensForm from "../Forms/NewLensForm";
import {AddCircleOutlined} from "@mui/icons-material";
import PageHeader from "./PageHeader";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({})
    const [open, setOpen] = useState(false)
    const [lensOpen, setLensOpen] = useState(false)
    const [cameraOpen, setCameraOpen] = useState(false)
    const [cities, setCities] = useState([])
    const [kitRerender, kitRefresh] = useState(true)
    const {control} = useForm()
    console.log("KIT ID: ", id)

    useEffect(() => {
        axios.get(`http://localhost:3001/kit/${id}`)
            .then(res => {
                setKit(res.data)
                console.log("RES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [kitRerender])

    useEffect(() => {
        axios.get('http://localhost:3001/cities')
            .then(res => {
                setCities(res.data)
                console.log("CITIES: ", res)
            }, rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])

    console.log("KIT DETAIL: ", kit)

    const SectionHeader = ({title}) => {
        return (
            <div className={'section-header p-2 rounded'}>
                <h2>{title}</h2>
            </div>
        )
    }

    return (
        <>
            {lensOpen &&
            <div
                className={'rounded row justify-content-around flex-row p-2 m-1 d-flex position-sticky'}>
                < NewLensForm setLensOpen={setLensOpen} lensOpen={lensOpen} kitsRefresh={kitRefresh}
                              kitsRerender={kitRerender}
                              kit={kit}/>

            </div>}
            {cameraOpen &&
            <div
                className={'rounded row justify-content-around flex-row p-2 m-1 d-flex position-sticky'}>
                {/*< NewLensForm setCameraOpen={setCameraOpen} cameraOpen={cameraOpen} kitsRefresh={kitRefresh}*/}
                {/*              kitsRerender={kitRerender}*/}
                {/*              kit={kit}/>*/}
                <h6>NEW CAMERA FORM</h6>
            </div>}
            {open &&
            <div className={'row shadow rounded p-2 m-2 bg-glass'}>
                <div className={'row d-flex justify-content-between p-2'}>
                    <form>
                        <div className={'row'}>
                            <h3>Load out</h3>
                        </div>
                        <label>Kit Name</label>
                        <TextField
                            className={'col-3 m-2 bg-white rounded'}
                            defaultValue={kit.kit_display}
                            size={'small'}/>
                        <Select label={'City'}
                                controller={control}
                                size={'small'}
                                className={'col-3 m-2 bg-white rounded'}
                                defaultValue={kit.city_id}>
                            {cities.map(city => <MenuItem value={city.city_id}>{city.city_code}</MenuItem>)}
                        </Select>
                        <Button size={'large'} className={'col-2'} variant={'contained'} type={'submit'}>ADD
                            LENS</Button>
                    </form>
                </div>
            </div>
            }
            <PageHeader title={kit.kit_display}/>
            <div className={`row d-flex p-2 m-1 flex-row justify-content-around`}>
                <div
                    className={`d-flex flex-wrap justify-content-around row rounded bg-glass`}
                    style={{maxWidth: '1200px'}}>
                    <div className={'row d-flex justify-content-end p-3 pb-1'}>
                        <Button variant={'contained'} size={'large'} className={'zoom bg-secondary col-4 m-2'}
                                onClick={() => setOpen(!open)}>LOAD OUT</Button>
                    </div>
                    <div className={'row flex-wrap'}>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <InfoCard header={<SectionHeader title={'INFO'}/>} kit={kit} setOpen={setOpen} open={open}/>
                        </div>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <StatusCard header={<SectionHeader title={'STATUS'}/>}/>
                        </div>
                    </div>
                    <div className={'row flex-wrap'}>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <GearListCard header={<SectionHeader title={'CAMERAS'}/>} type={'cam'} addButton={<Button
                                variant={'text'}
                                size={'large'}
                                className={'zoom m-2 p-2 text-secondary'}
                                onClick={() => setCameraOpen(!cameraOpen)}
                            ><AddCircleOutlined/></Button>}/>
                        </div>
                        <div className={'col-md-6 col-sm-12  m-0 p-2'}>
                            <GearListCard header={<SectionHeader
                                title={'LENSES'}/>} items={kit.lenses} type={'lens'} addButton={<Button
                                variant={'text'}
                                size={'large'}
                                className={'zoom m-2 p-2 text-secondary'}
                                onClick={() => setLensOpen(!lensOpen)}
                            ><AddCircleOutlined/></Button>}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackDetail