import React, {useState} from "react";
import {Button, MenuItem, TextField} from "@mui/material";
import UnderlineFilter from "../Filters/UnderlineFilter";

const FilterListHeader = ({setUnderlineFilter, underlineFilter, kits}) => {
    const [gearType, setGearType] = useState('kits')

    return (
        <>
            <div className={'col-12 d-flex flex-row justify-content-between align-items-center mb-3'}>
                <div className={'col-sm-8 col-lg-4'}>
                    <UnderlineFilter setUnderlineFilter={setUnderlineFilter} underlineFilter={underlineFilter}
                                     kits={kits}/>
                </div>
                <Button variant={'contained'} size={'large'} style={{backgroundColor: '#0DCCAA'}} className={'col-2'}>NEW
                    KIT</Button>
            </div>
            <div className={'row d-flex justify-content-between align-items-center mb-2'}>
                {/*<SearchBar/>*/}
                <div className={'col-5'}>
                    <TextField name={'gearTypeFilter'}
                               select
                               variant={'outlined'}
                               className={'bg-glass rounded'}
                               InputLabelProps={{shrink: false}}
                               size={'small'}
                               value={gearType} onChange={e => setGearType(e.target.value)}
                               style={{width: '120px', border: '1px solid white'}}>
                        <MenuItem value={'kits'}>KITS</MenuItem>
                        <MenuItem value={'lenses'}>LENSES</MenuItem>
                    </TextField>
                </div>
            </div>
        </>
    )
}

export default FilterListHeader