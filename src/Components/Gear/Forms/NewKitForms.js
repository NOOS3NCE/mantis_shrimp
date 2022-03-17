import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {Button} from "@mui/material";
import {Close} from "@mui/icons-material";
import {base_url} from "../../../env_variables";
import {MantisSelect, MantisTextField} from "../../Form Components/FormComponents";

const NewKitForms = ({kitsRefresh, setOpen, open}) => {
    const {control, handleSubmit} = useForm();

    const onSubmit = data => {
        axios.post(`${base_url}mantis_api/kit`, data)
            .then(res => console.log(res))
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
                                label={"City"}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <option value={null}>CITY*</option>
                                <option value={0}>TUL</option>
                                <option value={1}>DAL</option>
                                <option value={2}>KC</option>
                                <option value={3}>DEN</option>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>TYPE</h4>
                            <MantisSelect
                                name={'kit_type'}
                                label={"Type"}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <option value={null}>TYPE*</option>
                                <option value={'photo'}>Photo</option>
                                <option value={'video'}>Video</option>
                                <option value={'hybrid'}>Hybrid</option>
                            </MantisSelect>
                        </div>
                        <div className={'col-sm-12 col-md-6 my-2 d-flex align-items-start flex-column'}>
                            <h4 className={'list-title'}>CASE STYLE</h4>
                            <MantisSelect
                                name={'kit_case_style'}
                                label={"Type"}
                                size={'small'}
                                required
                                control={control}
                                col={12}
                            >
                                <option value={null}>STYLE*</option>
                                <option value={'Backpack'}>Backpack</option>
                                <option value={'Hard Case'}>Hard Case</option>
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