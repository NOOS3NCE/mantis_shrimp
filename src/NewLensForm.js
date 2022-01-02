import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, MenuItem, TextField} from "@mui/material";
import {AddCircleOutlined, Close} from "@mui/icons-material";
import {useForm} from "react-hook-form";

const NewLensForm = ({lensOpen, setLensOpen, kit, kitsRefresh, kitsRerender}) => {
    const [lenses, setLenses] = useState([])
    const [lensOptions, setLensOptions] = useState([])
    const {handleSubmit, register} = useForm()

    //Pull all Lenses from DB
    useEffect(() => {
        axios.get('http://localhost:3001/lens')
            .then(res => setLenses(res.data.map(lens => ({
                ...lens
            }))), rej => console.log(rej))
    }, [kitsRefresh])

    const onSubmitNewLens = (data) => {
        data.lensOptions.forEach(lens => lens.kit_name = kit.kit_name)
        console.log("DATA: ", data)
        data.lensOptions.forEach(lens => {
            axios.post('http://localhost:3001/lens', lens)
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
        axios.patch(`http://localhost:3001/lens/swap`, data)
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
            <div className={'col shadow rounded p-2 bg-dark my-2 position-relative'}>
                <div className={'row'}>
                    <h4 className={'col m-1'}>LENSES</h4>
                    <Button className={'col-1'} onClick={() => setLensOpen(!lensOpen)}><Close/></Button>
                </div>
                <div className={'row p-1 m-1 shadow-p'}>
                    <h5>ADD EXISTING LENS</h5>
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
                <div className={'row p-1 m-1 mt-4 shadow-p'}>
                    <h5>ADD NEW LENS</h5>
                </div>
                <form onSubmit={handleSubmit(onSubmitNewLens)}>
                    {lensOptions.map((lens, index) => (
                        <>
                            <div className={'row m-1 mt-4'}>
                                <TextField
                                    {...register(`lensOptions[${index}].lens_display`)}
                                    label={"Lens Name"}
                                    size={'small'}
                                    className={'m-1 bg-white rounded col-2'}
                                    required/>
                                <TextField
                                    {...register(`lensOptions[${index}].lens_model`)}
                                    label={"Lens Type"}
                                    size={'small'}
                                    className={'m-1 bg-white rounded col-2'}
                                    required
                                    select>
                                    <MenuItem value={'35'}>35mm</MenuItem>
                                    <MenuItem value={'50'}>50mm</MenuItem>
                                    <MenuItem value={'85'}>85mm</MenuItem>
                                    <MenuItem value={'135'}>135mm</MenuItem>
                                    <MenuItem value={'24-70'}>24-70mm</MenuItem>
                                    <MenuItem value={'28-75'}>28-75mm</MenuItem>
                                    <MenuItem value={'70-200'}>70-200mm</MenuItem>
                                </TextField>
                                <TextField
                                    {...register(`lensOptions[${index}].lens_brand`)}
                                    label={"Lens Brand"}
                                    size={'small'}
                                    className={'m-1 bg-white rounded col-2'}
                                    required/>
                                <TextField
                                    {...register(`lensOptions[${index}].lens_serial`)}
                                    label={"Lens Serial"}
                                    size={'small'}
                                    className={'m-1 bg-white rounded col-2'}
                                    required/>
                                <Button
                                    onClick={() => deleteLens(index)}
                                    className={'zoom col-1 text-secondary'}
                                    style={{backgroundColor: 'transparent'}}
                                ><Close/></Button>
                            </div>
                        </>))}
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