import React, {useEffect} from "react";
import {Button, InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import UnderlineFilter from "../Filters/UnderlineFilter";
import {useForm, Controller} from "react-hook-form";
import {Search} from "@mui/icons-material";
import {MantisMenuItem, MantisSearchField, MantisSelect, MantisTextField} from "../../Form Components/FormComponents";

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
    const {watch, control} = useForm()
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
                {setListType && <MantisSelect
                    size={'small'}
                    control={control}
                    name={"list_type"}
                    defaultValue={'kits'}
                    col={3}>
                    <MantisMenuItem key={0} value={'kits'}>KITS</MantisMenuItem>
                    <MantisMenuItem key={1} value={'lenses'}>LENSES</MantisMenuItem>
                    <MantisMenuItem key={2} value={'cameras'}>CAMERAS</MantisMenuItem>
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
                    defaultValue={'all'}
                    col={3}>
                    <MantisMenuItem key={0} value={'all'}>ALL CITIES</MantisMenuItem>
                    {cities && cities.map((city, index) => <MantisMenuItem key={index + 1}
                                                                           value={city?.city_code}>{city?.city_name.toUpperCase()}</MantisMenuItem>)}
                </MantisSelect>
            </div>
        </>
    )
}

export default FilterListHeader