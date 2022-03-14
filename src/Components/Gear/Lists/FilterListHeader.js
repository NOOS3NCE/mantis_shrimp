import React, {useEffect} from "react";
import {Button, InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import UnderlineFilter from "../Filters/UnderlineFilter";
import {useForm, Controller} from "react-hook-form";
import {Search} from "@mui/icons-material";
import {MantisSearchField, MantisSelect, MantisTextField} from "../../Form Components/FormComponents";

const FilterListHeader = ({
                              setUnderlineFilter,
                              underlineFilter,
                              data,
                              setOpen,
                              open,
                              setListType,
                              setCity,
                              cities,
                              searchQuery,
                              callback
                          }) => {
    const {watch, register, control} = useForm()
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
    console.log("CONTROL", control)
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
                {setListType && <MantisSelect
                    size={'small'}
                    control={control}
                    name={"list_type"}
                    defaultValue={'kits'}
                    col={3}>
                    <option key={0} value={'kits'}>KITS</option>
                    <option key={1} value={'lenses'}>LENSES</option>
                    <option key={2} value={'cameras'}>CAMERAS</option>
                </MantisSelect>}
                <MantisSearchField
                    size={'small'}
                    control={control}
                    onChange={searchQuery}
                    name={"search"}
                    col={3}
                    placeholder={'Search...'}
                    endAdornment={<Search/>}/>
                <MantisSelect
                    size={'small'}
                    control={control}
                    name={"list_city"}
                    defaultValue={''}
                    col={3}>
                    <option key={0} value={''}>ALL CITIES</option>
                    {cities && cities.map((city, index) => <option key={index + 1}
                                                                   value={city?.city_code}>{city?.city_name.toUpperCase()}</option>)}
                </MantisSelect>
                {/*<TextField*/}
                {/*    {...register(`list_city`)}*/}
                {/*    label={'City'}*/}
                {/*    size={'small'}*/}
                {/*    defaultValue={''}*/}
                {/*    className={'m-1 mx-0 px-0 bg-white rounded col-3'}*/}
                {/*    required*/}
                {/*    style={{'minWidth': '150px'}}*/}
                {/*    select>*/}
                {/*    <MenuItem key={0} value={''}>ALL</MenuItem>*/}
                {/*    {cities && cities.map((city, index) => <MenuItem key={index + 1}*/}
                {/*                                                     value={city?.city_code}>{city?.city_name}</MenuItem>)}*/}
                {/*</TextField>*/}
            </div>
        </>
    )
}

export default FilterListHeader