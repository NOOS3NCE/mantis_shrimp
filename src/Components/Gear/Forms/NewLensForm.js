import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, MenuItem, TextField} from "@mui/material";
import {AddCircleOutlined, Close} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {base_url} from "../../../env_variables";

const NewLensForm = ({lensOpen, setLensOpen, kit, kitsRefresh, kitsRerender}) => {
    const [lenses, setLenses] = useState([])
    const [lensOptions, setLensOptions] = useState([{lens: ""}])
    const {handleSubmit, register} = useForm()

    //Pull all Lenses from DB
    useEffect(() => {
        axios.get(`${base_url}mantis_api/lens`)
            .then(res => setLenses(res.data.map(lens => ({
                ...lens
            }))), rej => console.log(rej))
    }, [kitsRefresh])

    const onSubmitNewLens = (data) => {
        let config = {
            method: 'post',
            url: 'https://api.imgur.com/3/image',
            headers: {
                'Authorization': 'Client-ID f6dcfaa003fd756',
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: data.lens_image[0]
        };
        data.kit_id = kit.kit_id
        axios(config)
            .then(res => {
                data.lens_img = res.data?.data?.link
                console.log("IMAGE POST RES: ", res)
                console.log("LENS DATA: ", data)
                axios.post(`${base_url}mantis_api/lens`, data)
                    .then(res => {
                        setLensOpen(!lensOpen)
                        kitsRefresh(!kitsRerender)
                        console.log(res)
                    })
                    .catch(err => console.log(err))
            })
    }
    const onUpdateLens = (data) => {
        data.kit_id = parseInt(kit.kit_id)
        console.log("KIT ID:", data)
        axios.patch(`${base_url}mantis_api/lens/swap`, data)
            .then(res => console.log(res), rej => console.log(rej))
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
                <form onSubmit={handleSubmit(onUpdateLens)}>
                    <div className={'row m-1'}>
                        <TextField
                            {...register(`lens_id`)}
                            label={"Lens Name"}
                            size={'small'}
                            className={'m-1 mx-0 px-0 bg-white rounded col-8'}
                            required
                            select>
                            {lenses.map(lens => <MenuItem autoFocus
                                                          value={lens.lens_id}>{lens.lens_display} ({lens.lens_model}mm) {lens.kit_display ? ' - ' + lens.kit_display : ''}</MenuItem>)}
                        </TextField>
                        <Button size={'small'} className={'col-3 p-0 m-1'} variant={'contained'} type={'submit'}>ADD
                            LENS</Button>
                    </div>
                </form>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>ADD NEW LENS</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmitNewLens)}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>BRAND</h4>
                            <TextField
                                {...register(`lens_brand`)}
                                label={'BRAND'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}
                                required
                                select>
                                <MenuItem value={'Canon'}>Canon</MenuItem>
                                <MenuItem value={'Sony'}>Sony</MenuItem>
                                <MenuItem value={'Tamron'}>Tamron</MenuItem>
                                <MenuItem value={'Zeiss'}>Zeiss</MenuItem>
                                <MenuItem value={'Sigma'}>Sigma</MenuItem>
                            </TextField>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <TextField
                                {...register(`lens_model`)}
                                label={'MODEL'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded col-9'}
                                required
                                style={{'min-width': '230px'}}
                                select>
                                <MenuItem value={'35'}>35mm</MenuItem>
                                <MenuItem value={'50'}>50mm</MenuItem>
                                <MenuItem value={'85'}>85mm</MenuItem>
                                <MenuItem value={'135'}>135mm</MenuItem>
                                <MenuItem value={'24-70'}>24-70mm</MenuItem>
                                <MenuItem value={'28-75'}>28-75mm</MenuItem>
                                <MenuItem value={'70-200'}>70-200mm</MenuItem>
                            </TextField>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>SERIAL</h4>
                            <TextField
                                {...register(`lens_serial`)}
                                label={'SERIAL'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}
                                required/>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>PURCHASE DATE</h4>
                            <TextField
                                {...register(`lens_purchase_date`)}
                                size={'small'}
                                type={'date'}
                                className={'m-1 mx-0 px-0 bg-white rounded'}
                                style={{'min-width': '230px'}}/>
                        </div>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>IMAGE</h4>
                            <TextField
                                {...register(`lens_image`)}
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
export default NewLensForm