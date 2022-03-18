import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Button} from "@mui/material";
import {Close} from "@mui/icons-material";
import {base_url} from "../../../env_variables";
import {MantisMenuItem, MantisSelect, MantisTextField} from "../../Form Components/FormComponents";
import {api} from "../../../Todoist";
import HardCase from '../../../HardCase.svg'

const NewKitForms = ({kitsRefresh, setOpen, open}) => {
    const {control, handleSubmit} = useForm();

    const onSubmit = data => {
        data.city_id = parseInt(data?.city_id)
        console.log("DATA", data)
        axios.post(`${base_url}mantis_api/kit`, data)
            .then(res => {
                // api.addLabel({name: res?.data[0]?.kit_display?.toLowerCase()?.split(' ')?.join('_')})
                //     .then((label) => console.log(label))
                //     .catch((error) => console.log(error))
                console.log(res?.data)
                console.log("NEW LABEL NAME", res?.data[0]?.kit_display?.toLowerCase()?.split(' ')?.join('_'))
            })
            .catch(err => console.log(err))
        kitsRefresh()
        setOpen(!open)
    }

    return (
        <>
            <div className={'row p-1 m-1 mt-4'}>
                <div className={'row d-flex justify-content-between m-0 p-0'}>
                    <h4 className={'col m-1'}>NEW KIT</h4>
                    <Button
                        onClick={() => setOpen(!open)}
                        className={'col-1 p-0 m-0'} size={'small'} style={{'width': '5px'}}
                    ><Close/></Button>
                </div>
                <div className={'br'}/>
                <form onSubmit={handleSubmit(onSubmit)} className={'p-0 m-0'}>
                    <div className={'row m-1 mt-2 d-flex flex-wrap justify-content-start'}>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>KIT NAME</h4>
                            <MantisTextField
                                name={'kit_display'}
                                placeholder={"Kit Name*"}
                                size={'small'}
                                className={'m-1 bg-white rounded'}
                                required
                                control={control}
                                col={12}
                            />
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>CITY</h4>
                            <MantisSelect
                                name={'city_id'}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <MantisMenuItem value={0}>TUL</MantisMenuItem>
                                <MantisMenuItem value={1}>DAL</MantisMenuItem>
                                <MantisMenuItem value={2}>KC</MantisMenuItem>
                                <MantisMenuItem value={3}>DEN</MantisMenuItem>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <MantisSelect
                                name={'kit_type'}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <MantisMenuItem value={'photo'}>Photo</MantisMenuItem>
                                <MantisMenuItem value={'video'}>Video</MantisMenuItem>
                                <MantisMenuItem value={'hybrid'}>Hybrid</MantisMenuItem>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>CASE STYLE</h4>
                            <MantisSelect
                                name={'kit_case_style'}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <MantisMenuItem value={'Backpack'}>Backpack</MantisMenuItem>
                                <MantisMenuItem value={'Hard Case'}>Hard Case</MantisMenuItem>
                            </MantisSelect>
                        </div>
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
        </>
    )
}

export default NewKitForms