import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, MenuItem, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {base_url} from "../../../env_variables";
import {currentlyLoggedIn} from "../../Users/Login/Login";
import {
    MantisDateField,
    MantisMenuItem,
    MantisSelect,
    MantisTextField,
    MantisUploadField
} from "../../Form Components/FormComponents";

const NewLensForm = ({lensOpen, setLensOpen, kit, kitsRefresh, kitsRerender, defaultOpen}) => {
    const [lenses, setLenses] = useState([])
    const {handleSubmit, control} = useForm()
    const currentUser = currentlyLoggedIn()[0]

    //Pull all Lenses from DB
    useEffect(() => {
        axios.get(`${base_url}mantis_api/lens`)
            .then(res => setLenses(res.data.map(lens => ({
                ...lens
            }))), rej => console.log(rej))
    }, [kitsRefresh])

    const onSubmitNewLens = (data) => {
        let headers = process.env.NODE_ENV !== 'development' ? {
            'Authorization': 'Client-ID f6dcfaa003fd756',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        } : {}
        let config = {
            method: 'post',
            url: process.env.NODE_ENV === 'development' ? `${base_url}mantis_api/imgurfake` : 'https://api.imgur.com/3/image',
            headers: headers,
            data: data.lens_image[0]
        };
        data.kit_id = kit.kit_id
        axios(config)
            .then(res => {
                data.lens_img = res.data?.data?.link
                axios.post(`${base_url}mantis_api/lens`, data)
                    .then(res => {
                        console.log(res)
                        const history = {
                            // user_id: userContext?.user_id,
                            kit_id: data?.kit_id,
                            lens_id: res?.data?.rows[0]?.lens_id,
                            history_message: "New lens added to kit",
                            history_target: kit?.kit_display,
                            history_sender: `${currentUser?.user_firstname} ${currentUser?.user_lastname.slice(0, 1)}.`,
                            history_title: "LENS ADDED TO"
                        }
                        console.log("HISTORY: ", history)
                        axios.post(`${base_url}mantis_api/history`, history)
                            .then(res => console.log(res))
                            .catch(err => console.log(err))
                        setLensOpen(defaultOpen)
                        kitsRefresh(!kitsRerender)
                    })
                    .catch(err => console.log(err))
            })
    }
    const onUpdateLens = (data) => {
        data.kit_id = parseInt(kit.kit_id)
        data.kit_display = lenses.filter(lens => lens.lens_id === data.lens_id)[0].kit_display
        console.log("KIT ID:", data)
        axios.patch(`${base_url}mantis_api/lens/swap`, data)
            .then(res => {
                console.log("KIT IN SWAP", data)
                const history = {
                    // user_id: userContext?.user_id,
                    kit_id: data.kit_id,
                    lens_id: data.lens_id,
                    history_message: "Lens swapped to kit",
                    history_sender: data.kit_display,
                    history_target: kit.kit_display,
                    history_title: "LENS SWAPPED TO"
                }
                axios.post(`${base_url}mantis_api/history`, history)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            })
            .then(() => {
                setLensOpen(!lensOpen)
                kitsRefresh(!kitsRerender)
            })
    }
    return (
        <>
            <div className={'row d-flex justify-content-between m-0 p-0'}>
                <h4 className={'col m-1 text-center'}>ADD LENS</h4>
                <Button className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                        onClick={() => setLensOpen(!lensOpen)}><Close/></Button>
            </div>
            <div className={'row p-1 m-1'}>
                <h5>MOVE EXISTING LENS</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onUpdateLens)} className={'p-0 m-0'}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-12 my-2 d-flex align-items-start flex-row'}>
                            <MantisSelect
                                name={`camera_id`}
                                placeHolder={"SELECT LENS"}
                                size={'small'}
                                required
                                col={8}
                                control={control}>
                                {lenses.map(lens => <MantisMenuItem
                                    value={lens.lens_id}>{lens.lens_display} ({lens.lens_model}) {lens.kit_display ? ' - ' + lens.kit_display : ''}</MantisMenuItem>)}
                            </MantisSelect>
                            <Button size={'large'} className={'col m-1'} variant={'contained'}
                                    type={'submit'}>ADD</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>ADD NEW LENS</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmitNewLens)} className={'p-0 m-0'}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>BRAND</h4>
                            <MantisSelect
                                name={'lens_brand'}
                                size={'small'}
                                control={control}
                                defaultValue={''}
                                col={12}
                                required>
                                <MantisMenuItem value={'Canon'}>Canon</MantisMenuItem>
                                <MantisMenuItem value={'Sony'}>Sony</MantisMenuItem>
                                <MantisMenuItem value={'Tamron'}>Tamron</MantisMenuItem>
                                <MantisMenuItem value={'Zeiss'}>Zeiss</MantisMenuItem>
                                <MantisMenuItem value={'Sigma'}>Sigma</MantisMenuItem>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <MantisSelect
                                name={`lens_model`}
                                control={control}
                                size={'small'}
                                defaultValue={''}
                                col={12}
                                required>
                                <MantisMenuItem value={'35'}>35mm</MantisMenuItem>
                                <MantisMenuItem value={'50'}>50mm</MantisMenuItem>
                                <MantisMenuItem value={'85'}>85mm</MantisMenuItem>
                                <MantisMenuItem value={'135'}>135mm</MantisMenuItem>
                                <MantisMenuItem value={'24-70'}>24-70mm</MantisMenuItem>
                                <MantisMenuItem value={'28-75'}>28-75mm</MantisMenuItem>
                                <MantisMenuItem value={'70-200'}>70-200mm</MantisMenuItem>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>SERIAL</h4>
                            <MantisTextField
                                name={`lens_serial`}
                                size={'small'}
                                control={control}
                                placeholder={'SERIAL*'}
                                col={12}
                                required/>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>PURCHASE DATE</h4>
                            <MantisDateField
                                name={'lens_purchase_date'}
                                size={'small'}
                                control={control}
                                col={12}/>
                        </div>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>IMAGE</h4>
                            <MantisUploadField
                                name={`lens_image`}
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
export default NewLensForm