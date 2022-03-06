import React, {useState} from "react";
import {Button, MenuItem, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import axios from "axios";
import {base_url} from "../../../env_variables";

const LoadInForm = (props) => {
    const {setLoadInOpen, defaultOpen, kit, kitRefresh, kitRerender} = props
    const {handleSubmit, register} = useForm()

    const loadInKit = () => {
        axios.patch(`${base_url}mantis_api/kit/loadin`, {params: {kit_id: parseInt(kit?.kit_id)}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        console.log("KIT LOADED IN")
        kitRefresh(!kitRerender)
    }

    return (
        <>
            <div className={'row d-flex justify-content-between m-0 p-0'}>
                <h4 className={'col m-1 text-center'}>LOAD IN KIT</h4>
                <Button className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                        onClick={() => setLoadInOpen(defaultOpen)}><Close/></Button>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>CHOOSE SHOOTER</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(loadInKit)}>
                    <div className={'row d-flex align-content-center justify-content-center m-1'}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            className={'zoom m-1 bg-secondary'}
                        >LOAD IN</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoadInForm