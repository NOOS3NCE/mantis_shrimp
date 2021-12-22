import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Button, MenuItem, Select, TextField} from "@mui/material";
import {AddCircleOutlined, Close} from "@mui/icons-material";

const NewKitForms = ({kitsRefresh, kitsRerender, setOpen, open}) => {
    const {register, handleSubmit} = useForm();
    const [lenses, setLenses] = useState([{lens: 'lens'}])
    const [cameras, setCameras] = useState([{camera: 'camera'}])

    const onSubmit = data => {
        console.log(data)
        // data.name = data.display.toLowerCase().split(' ').join('')
        // axios.post('http://localhost:3001/kit', data)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // axios.post('http://localhost:3001/lens', data.lenses[index])
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // axios.post('http://localhost:3001/camera', data.cameras[index])
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // kitsRefresh(!kitsRerender)
        setOpen(!open)
    }
    const addLens = () => {
        setLenses([...lenses, {lens: 'lens'}])
    }
    const deleteLens = (id) => {
        let tempLenses = lenses.filter((lens, index) => index !== id)
        setLenses(tempLenses)
    }
    const addCamera = () => {
        setCameras([...cameras, {lens: 'lens'}])
    }
    const deleteCamera = (id) => {
        let tempCameras = cameras.filter((lens, index) => index !== id)
        setCameras(tempCameras)
    }

    return (
        <>
            <div className={'col-10 shadow rounded p-2 bg-dark my-2 position-relative'}>
                <div className={'row'}>
                    <div className={'col-1 offset-11'}>
                        <Button
                            onClick={() => setOpen(!open)}
                            color={'secondary'}
                            style={{backgroundColor: 'transparent'}}
                        ><Close/></Button>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'row'}>
                        <label className={'m-1'}>KIT INFO</label>
                    </div>
                    <TextField
                        {...register('display')}
                        label={"Kit Name"}
                        size={'small'}
                        className={'m-1 bg-white rounded'}
                        required
                    />
                    <Select
                        {...register('city_id')}
                        label={"City"}
                        size={'small'}
                        required
                        className={'col-2 m-1 bg-white rounded'}
                    >
                        <MenuItem value={''}>--</MenuItem>
                        <MenuItem value={0}>TUL</MenuItem>
                        <MenuItem value={1}>DAL</MenuItem>
                        <MenuItem value={2}>KC</MenuItem>
                        <MenuItem value={3}>DEN</MenuItem>
                    </Select>
                    <div className={'row'}>
                        <label className={'m-1'}>CAMERAS</label>
                    </div>
                    {cameras.map((camera, index) => (
                        <div className={'row m-1'}>
                            <TextField
                                {...register(`camera[${index}].name`)}
                                label={"Camera Name"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-2'}
                                required/>
                            <TextField
                                {...register(`camera[${index}].type`)}
                                label={"Camera Type"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-3'}
                                required/>
                            <TextField
                                {...register(`camera[${index}].brand`)}
                                label={"Camera Brand"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-2'}
                                required/>
                            <TextField
                                {...register(`camera[${index}].serial`)}
                                label={"Camera Serial"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-3'}
                                required/>
                            <Button
                                onClick={() => deleteCamera(index)}
                                className={'col-1'}
                                color={'secondary'}
                                style={{backgroundColor: 'transparent'}}
                            ><Close/></Button>
                        </div>))}
                    <div className={'row m-1'}>
                        <Button
                            color={'secondary'}
                            onClick={addCamera}>
                            <AddCircleOutlined/>
                        </Button>
                    </div>
                    <div className={'row'}>
                        <label className={'m-1'}>LENSES</label>
                    </div>
                    {lenses.map((lens, index) => (
                        <div className={'row m-1'}>
                            <TextField
                                {...register(`lenses[${index}].name`)}
                                label={"Lens Name"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-2'}
                                required/>
                            <Select
                                {...register(`lenses[${index}].type`)}
                                label={"Lens Type (mm)"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-2'}
                                required>
                                <MenuItem value={''}>--</MenuItem>
                                <MenuItem value={'35'}>35mm</MenuItem>
                                <MenuItem value={'50'}>50mm</MenuItem>
                                <MenuItem value={'85'}>85mm</MenuItem>
                                <MenuItem value={'135'}>135mm</MenuItem>
                                <MenuItem value={'24-70'}>24-70mm</MenuItem>
                                <MenuItem value={'24-70'}>28-75mm</MenuItem>
                                <MenuItem value={'70-200'}>70-200mm</MenuItem>
                            </Select>
                            <TextField
                                {...register(`lenses[${index}].brand`)}
                                label={"Lens Brand"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-2'}
                                required/>
                            <TextField
                                {...register(`lenses[${index}].serial`)}
                                label={"Lens Serial"}
                                size={'small'}
                                className={'m-1 bg-white rounded col-3'}
                                required/>
                            <Button
                                onClick={() => deleteLens(index)}
                                className={'col-1'}
                                color={'secondary'}
                                style={{backgroundColor: 'transparent'}}
                            ><Close/></Button>
                        </div>))}
                    <div className={'row m-1'}>
                        <Button
                            color={'secondary'}
                            onClick={addLens}>
                            <AddCircleOutlined/>
                        </Button>
                    </div>
                    <div className={'row d-flex align-content-center justify-content-center m-1'}>
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            type={'submit'}
                            size={'small'}
                            className={'m-1'}
                        >ADD</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewKitForms