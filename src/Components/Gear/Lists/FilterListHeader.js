import React, {useEffect} from "react";
import {Button, MenuItem, TextField} from "@mui/material";
import UnderlineFilter from "../Filters/UnderlineFilter";
import {useForm} from "react-hook-form";

const FilterListHeader = ({
                              setUnderlineFilter,
                              underlineFilter,
                              data,
                              setOpen,
                              open,
                              setListType,
                              setCity,
                              cities,
                          }) => {
    const {watch, register} = useForm()
    const type = watch(["list_type", "list_city"])

    useEffect(() => {
        if (setListType) {
            if (type[0] === 'lenses') {
                setListType('lens')
            } else if (type[0] === 'cameras') {
                setListType('camera')
            } else if (type[0] === 'kits') {
                setListType('kit')
            }
        }
        setCity(type[1])
    }, [type])

    return (
        <>
            <div className={'col-12 d-flex flex-row justify-content-between align-items-center mb-3'}>
                <div className={'col-sm-8 col-lg-5'}>
                    {data &&
                    <UnderlineFilter setUnderlineFilter={setUnderlineFilter} underlineFilter={underlineFilter}
                                     kits={data}/>}
                </div>
                {setOpen && <Button onClick={setOpen(!open)} variant={'contained'} size={'large'}
                                    style={{backgroundColor: '#0DCCAA'}} className={'col-2'}>NEW
                    KIT</Button>}
            </div>
            <div className={'col-12 flex-row d-flex justify-content-between align-items-center mb-2'}>
                {setListType && <TextField
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
                </TextField>}
                <TextField
                    {...register(`list_city`)}
                    label={'City'}
                    size={'small'}
                    defaultValue={''}
                    className={'m-1 mx-0 px-0 bg-white rounded col-3'}
                    required
                    style={{'minWidth': '150px'}}
                    select>
                    <MenuItem key={0} value={''}>ALL</MenuItem>
                    {cities && cities.map((city, index) => <MenuItem key={index + 1}
                                                                     value={city?.city_code}>{city?.city_name}</MenuItem>)}
                </TextField>
            </div>
        </>
    )
}

export default FilterListHeader