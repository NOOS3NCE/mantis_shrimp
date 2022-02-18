import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {base_url} from "../../../env_variables";
import {Button, MenuItem, TextField} from "@mui/material";
import {AddCircleOutlined, Close} from "@mui/icons-material";

const NewCameraForm = ({cameraOpen, setCameraOpen, kit, kitsRefresh, kitsRerender}) => {
    const [cameras, setCameras] = useState([])
    const {handleSubmit, register, watch} = useForm()
    const [models, setModels] = useState([])
    const brand = watch("camera_brand")

    //watch brand to set models
    useEffect(() => {
        if (brand === 'Canon') {
            setModels(() => ['5D MkIV', '5D MkIII', '6D MkII', 'EOS R', 'EOS R6'])
        } else if (brand === 'Sony') {
            setModels(() => ['A7III', 'A7SII', 'A6500', 'A6400'])
        }
    }, [brand])

    //Pull all Lenses from DB
    useEffect(() => {
        axios.get(`${base_url}mantis_api/camera`)
            .then(res => setCameras(res.data.map(camera => ({
                ...camera
            }))), rej => console.log(rej))
    }, [kitsRefresh])

    const onSubmitNewCamera = (data) => {
        let config = {
            method: 'post',
            url: 'https://api.imgur.com/3/image',
            headers: {
                'Authorization': 'Client-ID f6dcfaa003fd756',
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: data.camera_image[0]
        };
        axios(config)
            .then(res => {
                data.camera_img = res.data?.data?.link
                console.log("IMAGE POST RES: ", res)
                console.log("LENS DATA: ", data)
                data.kit_id = kit.kit_id
                console.log("DATA: ", data)
                axios.post(`${base_url}mantis_api/camera`, data)
                    .then(res => {
                        setCameraOpen(!cameraOpen)
                        kitsRefresh(!kitsRerender)
                        console.log(res)
                        const history = {
                            kit_id: data.kit_id,
                            history_message: "New camera added to kit",
                            history_target: kit.kit_name,
                            history_sender: "Mike C.",
                            history_title: "CAMERA ADDED TO"
                        }
                        axios.post(`${base_url}mantis_api/history`, history)
                            .then(res => console.log(res))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
    }

    const onUpdateCamera = (data) => {
        data.kit_id = parseInt(kit.kit_id)
        console.log("KIT ID:", data)
        axios.patch(`${base_url}mantis_api/camera/swap`, data)
            .then(res => console.log(res), rej => console.log(rej))
            .then(() => {
                setCameraOpen(!cameraOpen)
                kitsRefresh(!kitsRerender)
            })
    }
    console.log("MODELS: ", models)
    return (
        <>
            <div className={'row d-flex justify-content-between m-0 p-0'}>
                <h4 className={'col m-1 text-center'}>ADD LENS</h4>
                <Button className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                        onClick={() => setCameraOpen(!cameraOpen)}><Close/></Button>
            </div>
            <div className={'row p-1 m-1'}>
                <h5>MOVE EXISTING CAMERA</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onUpdateCamera)}>
                    <div className={'row m-1'}>
                        <TextField
                            {...register(`camera_id`)}
                            label={"Camera Name"}
                            size={'small'}
                            className={'m-1 mx-0 px-0 bg-white rounded col-8'}
                            required
                            select>
                            {cameras.map(camera => <MenuItem
                                value={camera.camera_id}>{camera.camera_display} ({camera.camera_model}) {camera.kit_display ? ' - ' + camera.kit_display : ''}</MenuItem>)}
                        </TextField>
                        <Button size={'small'} className={'col-3 m-1'} variant={'contained'} type={'submit'}>ADD
                            CAMERA</Button>
                    </div>
                </form>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>ADD NEW CAMERA</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmitNewCamera)}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>BRAND</h4>
                            <TextField
                                {...register(`camera_brand`)}
                                label={'BRAND'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}
                                required
                                select>
                                <MenuItem value={'Canon'}>Canon</MenuItem>
                                <MenuItem value={'Sony'}>Sony</MenuItem>
                            </TextField>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <TextField
                                {...register(`camera_model`)}
                                label={'MODEL'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded col-9'}
                                required
                                style={{'min-width': '230px'}}
                                select>
                                {models?.map(model => (
                                    <MenuItem value={model}>{model}</MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>SERIAL</h4>
                            <TextField
                                {...register(`camera_serial`)}
                                label={'SERIAL'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}
                                required/>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>PURCHASE DATE</h4>
                            <TextField
                                {...register(`camera_purchase_date`)}
                                size={'small'}
                                type={'date'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}/>
                        </div>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>IMAGE</h4>
                            <TextField
                                {...register(`camera_image`)}
                                type={'file'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}/>
                        </div>
                    </div>
                    <div className={'row d-flex align-content-center justify-content-center m-1'}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            className={'zoom m-1 bg-secondary'}
                        >ADD</Button>
                    </div>
                </form>
            </div>
        </>)
}
export default NewCameraForm