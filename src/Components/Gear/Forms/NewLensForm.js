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
        data.lensOptions.forEach(lens => lens.kit_name = kit.kit_name)
        console.log("DATA: ", data)
        data.lensOptions.forEach(lens => {
            axios.post(`${base_url}mantis_api/lens`, lens)
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

    const addLens = () => {
        setLensOptions([...lensOptions, {lens: 'lens'}])
    }
    const deleteLens = (id) => {
        let tempLenses = lensOptions.filter((lens, index) => index !== id)
        setLensOptions(tempLenses)
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
                            className={'m-1 bg-white rounded col-5'}
                            required
                            select>
                            {lenses.map(lens => <MenuItem autoFocus
                                                          value={lens.lens_id}>{lens.lens_display} {lens.kit_display ? ' - ' + lens.kit_display : ''}</MenuItem>)}
                        </TextField>
                        <Button size={'small'} className={'col-2 p-0 m-1'} variant={'contained'} type={'submit'}>ADD
                            LENS</Button>
                    </div>
                </form>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>ADD NEW LENS</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmitNewLens)}>
                    {lensOptions.map((lens, index) => (
                        <>
                            <div
                                className={'col-12 m-1 mt-2 d-flex flex-row justify-content-between align-items-center'}>
                                <h4 className={'col-11 list-head'}>LENS {index + 1}</h4>
                                <Button
                                    onClick={() => deleteLens(index)}
                                    className={'zoom col text-secondary'}
                                    style={{backgroundColor: 'transparent'}}
                                ><Close/></Button>
                            </div>
                            <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                                <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                                    <h4 className={'list-title'}>NAME</h4>
                                    <TextField
                                        {...register(`lensOptions[${index}].lens_display`)}
                                        label={'NAME'}
                                        size={'small'}
                                        className={'m-1 mx-0 px-0 bg-white rounded'}
                                        style={{'min-width': '240px'}}
                                        required/>
                                </div>
                                <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                                    <h4 className={'list-title'}>TYPE</h4>
                                    <TextField
                                        {...register(`lensOptions[${index}].lens_model`)}
                                        label={'MODEL'}
                                        size={'small'}
                                        className={'m-1 mx-0 px-0 bg-white rounded col-9'}
                                        required
                                        style={{'min-width': '240px'}}
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
                                    <h4 className={'list-title'}>BRAND</h4>
                                    <TextField
                                        {...register(`lensOptions[${index}].lens_brand`)}
                                        label={'BRAND'}
                                        size={'small'}
                                        className={'m-1 mx-0 px-0 bg-white rounded'}
                                        style={{'min-width': '240px'}}
                                        required/>
                                </div>
                                <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                                    <h4 className={'list-title'}>SERIAL</h4>
                                    <TextField
                                        {...register(`lensOptions[${index}].lens_serial`)}
                                        label={'SERIAL'}
                                        size={'small'}
                                        className={'m-1 mx-0 px-0 bg-white rounded'}
                                        style={{'min-width': '240px'}}
                                        required/>
                                </div>
                                <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                                    <h4 className={'list-title'}>PURCHASE DATE</h4>
                                    <TextField
                                        {...register(`lensOptions[${index}].lens_purchase_date`)}
                                        size={'small'}
                                        type={'date'}
                                        className={'m-1 mx-0 px-0 bg-white rounded'}
                                        style={{'min-width': '240px'}}/>
                                </div>

                            </div>
                        </>
                    ))}
                    <div className={'row m-1'}>
                        <Button
                            className={'zoom text-secondary'}
                            onClick={addLens}>
                            <AddCircleOutlined/>
                        </Button>
                    </div>
                    <div className={'row d-flex align-content-center justify-content-center m-1'}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            size={'small'}
                            className={'zoom m-1 bg-secondary'}
                        >ADD</Button>
                    </div>
                </form>
            </div>
        </>)
}
export default NewLensForm