import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {base_url} from "../../../env_variables";
import {Button, MenuItem} from "@mui/material";
import {Close} from "@mui/icons-material";
import {currentlyLoggedIn} from "../../Users/Login/Login";
import {
    MantisDateField, MantisDateField2, MantisMenuItem,
    MantisSelect,
    MantisTextField,
    MantisUploadField
} from "../../Form Components/FormComponents";

const NewCameraForm = ({cameraOpen, setCameraOpen, kit, kitsRefresh, kitsRerender, defaultOpen}) => {
    const [cameras, setCameras] = useState([])
    const {handleSubmit, register, watch, control} = useForm()
    const [models, setModels] = useState([])
    const brand = watch("camera_brand")
    const currentUser = currentlyLoggedIn()[0]

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
        let headers = process.env.NODE_ENV !== 'development' ? {
            'Authorization': 'Client-ID f6dcfaa003fd756',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        } : {}
        let config = {
            method: 'post',
            url: process.env.NODE_ENV === 'development' ? `${base_url}mantis_api/imgurfake` : 'https://api.imgur.com/3/image',
            headers: headers,
            data: data?.camera_image
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
                        console.log("CAMERA ADD ID: ", res)
                        const history = {
                            // user_id: userContext?.user_id,
                            kit_id: data.kit_id,
                            camera_id: res?.data?.rows[0]?.camera_id,
                            history_message: "New camera added to kit",
                            history_target: kit.kit_display,
                            history_sender: `${currentUser?.user_firstname} ${currentUser?.user_lastname.slice(0, 1)}.`,
                            history_title: "CAMERA ADDED TO"
                        }
                        console.log("HISTORY: ", history)
                        axios.post(`${base_url}mantis_api/history`, history)
                            .then(res => console.log("HISTORY FOR ADD CAMERA", res))
                            .catch(err => console.log(err))
                        setCameraOpen(defaultOpen)
                        kitsRefresh(!kitsRerender)
                    })
                    .catch(err => console.log(err))
            })
    }

    const onUpdateCamera = (data) => {
        data.kit_id = parseInt(kit.kit_id)
        data.kit_display = cameras.filter(camera => camera.camera_id === data.camera_id)[0].kit_display
        console.log("KIT ID:", data)
        axios.patch(`${base_url}mantis_api/camera/swap`, data)
            .then(res => {
                const history = {
                    // user_id: userContext?.user_id,
                    kit_id: data.kit_id,
                    camera_id: data.camera_id,
                    history_message: "New camera swapped to kit",
                    history_target: kit.kit_display,
                    history_sender: data.kit_display,
                    history_title: "CAMERA SWAPPED TO"
                }
                axios.post(`${base_url}mantis_api/history`, history)
                    .then(res => console.log("SWAP RES", res))
                    .catch(err => console.log(err))
            })
            .then(() => {
                setCameraOpen(!cameraOpen)
                kitsRefresh(!kitsRerender)
            })
    }
    console.log("MODELS: ", models)
    return (
        <>
            <div className={'row d-flex justify-content-between m-0 p-0'}>
                <h4 className={'col m-1 text-center'}>ADD CAMERA</h4>
                <Button className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                        onClick={() => setCameraOpen(!cameraOpen)}><Close/></Button>
            </div>
            <div className={'row p-1 m-1'}>
                <h5>MOVE EXISTING CAMERA</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onUpdateCamera)} className={'p-0 m-0'}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-12 my-2 d-flex align-items-start flex-row'}>
                            <MantisSelect
                                name={`camera_id`}
                                placeHolder={"SELECT CAMERA"}
                                size={'small'}
                                required
                                col={8}
                                control={control}>
                                {cameras.map(camera => <MantisMenuItem
                                    value={camera.camera_id}>{camera.camera_display} ({camera.camera_model}) {camera.kit_display ? ' - ' + camera.kit_display : ''}</MantisMenuItem>)}
                            </MantisSelect>
                            <Button size={'large'} className={'col m-1'} variant={'contained'}
                                    type={'submit'}>ADD</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>ADD NEW CAMERA</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmitNewCamera)} className={'p-0 m-0'}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>BRAND</h4>
                            <MantisSelect
                                name={'camera_brand'}
                                size={'small'}
                                control={control}
                                placeholder={"BRAND"}
                                defaultValue={''}
                                col={12}
                                required>
                                <MantisMenuItem key={1}
                                                value={'Canon'}>Canon</MantisMenuItem>
                                <MantisMenuItem key={2}
                                                value={'Sony'}>Sony</MantisMenuItem>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <MantisSelect
                                name={`camera_model`}
                                control={control}
                                size={'small'}
                                defaultValue={''}
                                placeholder={'MODEL'}
                                col={12}
                                required>
                                {models?.map((model, index) => (
                                    <MantisMenuItem key={index + 1} value={model}>{model}</MantisMenuItem>
                                ))}
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>SERIAL</h4>
                            <MantisTextField
                                name={`camera_serial`}
                                size={'small'}
                                control={control}
                                placeholder={'SERIAL'}
                                col={12}
                                required/>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>PURCHASE DATE</h4>
                            <MantisDateField
                                name={'camera_purchase_date'}
                                size={'small'}
                                control={control}
                                required
                                col={12}/>
                        </div>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>IMAGE</h4>
                            <MantisUploadField
                                name={`camera_image`}
                                type={'file'}
                                col={12}
                                control={control}
                                accept={"image/*"}
                                onChange={(e) => console.log("on change image:", e.target.files[0].name)}/>
                        </div>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <Button
                                variant={'contained'}
                                type={'submit'}
                                className={'zoom m-1 bg-secondary col-12 my-2'}
                            >ADD</Button>
                        </div>
                    </div>

                </form>
            </div>
        </>)
}
export default NewCameraForm