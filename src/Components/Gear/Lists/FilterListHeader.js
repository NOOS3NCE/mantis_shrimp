import React, {useEffect} from "react";
import {Button, MenuItem, TextField} from "@mui/material";
import UnderlineFilter from "../Filters/UnderlineFilter";
import {useForm} from "react-hook-form";

const FilterListHeader = ({setUnderlineFilter, underlineFilter, data, setOpen, open, setListType, listType}) => {
    const {watch, register} = useForm()
    const type = watch("list_type")

    useEffect(() => {
        if (type === 'lenses') {
            setListType('lens')
        } else if (type === 'cameras') {
            setListType('camera')
        } else if (type === 'kits') {
            setListType('kit')
        }
    }, [type])


    return (
        <>
            <div className={'col-12 d-flex flex-row justify-content-between align-items-center mb-3'}>
                <div className={'col-sm-8 col-lg-5'}>
                    <UnderlineFilter setUnderlineFilter={setUnderlineFilter} underlineFilter={underlineFilter}
                                     kits={data}/>
                </div>
                <Button onClick={setOpen(!open)} variant={'contained'} size={'large'}
                        style={{backgroundColor: '#0DCCAA'}} className={'col-2'}>NEW
                    KIT</Button>
            </div>
            <div className={'col-12 flex-row d-flex justify-content-between align-items-center mb-2'}>
                <TextField
                    {...register(`list_type`)}
                    label={'Type'}
                    size={'small'}
                    defaultValue={'kits'}
                    className={'m-1 mx-0 px-0 bg-white rounded col-3'}
                    required
                    style={{'minWidth': '230px'}}
                    select>
                    <MenuItem key={0} value={'kits'}>KITS</MenuItem>
                    <MenuItem key={1} value={'lenses'}>LENSES</MenuItem>
                    <MenuItem key={2} value={'cameras'}>CAMERAS</MenuItem>
                </TextField>
            </div>
        </>
    )
}

export default FilterListHeader