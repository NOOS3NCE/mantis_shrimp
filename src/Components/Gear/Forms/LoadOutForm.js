import React, {useEffect, useState} from "react";
import {Button, MenuItem, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import axios from "axios";
import {useForm} from "react-hook-form";
import {base_url} from "../../../env_variables";

const LoadOutForm = (props) => {
    const {kit, defaultOpen, setUserOpen, kitRefresh, kitRerender} = props
    const [users, setUsers] = useState([])
    const {handleSubmit, register} = useForm()

    useEffect(() => {
        axios.get(`${base_url}mantis_api/user`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const loadOutKit = (data) => {
        let loadOutData = {
            ...data, kit_id: kit?.kit_id
        }
        setUserOpen(defaultOpen)
        console.log("KIT LOADED OUT", loadOutData)
        axios.patch(`${base_url}mantis_api/kit/loadout`, {params: loadOutData})
            .then(res => console.log(res))
            .catch(res => console.log(res))
        kitRefresh(!kitRerender)
    }

    return (
        <>
            <div className={'row d-flex justify-content-between m-0 p-0'}>
                <h4 className={'col m-1 text-center'}>LOAD OUT KIT</h4>
                <Button className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                        onClick={() => setUserOpen(defaultOpen)}><Close/></Button>
            </div>
            <div className={'row p-1 m-1 mt-4'}>
                <h5>CHOOSE SHOOTER</h5>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(loadOutKit)}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-12 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>SHOOTER</h4>
                            <TextField
                                {...register(`user_id`)}
                                label={'SHOOTER'}
                                size={'small'}
                                className={'m-1 mx-0 px-0 bg-white rounded col-12'}
                                required
                                style={{'min-width': '230px'}}
                                select>
                                {users?.map(user => (
                                    <MenuItem
                                        key={user?.user_id}
                                        value={user?.user_id}>{`${user.user_firstname} ${user.user_lastname}`}</MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className={'row d-flex align-content-center justify-content-center m-1'}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                            className={'zoom m-1 bg-secondary'}
                        >LOAD OUT</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoadOutForm