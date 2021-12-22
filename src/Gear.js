import React, {useEffect, useState} from "react";
import MantisCard from "./MantisCard";
import axios from "axios";
import {Button} from "@mui/material";
import NewKitForms from "./NewKitForms";
import GearListCard from "./GearListCard";


const Gear = () => {
    const [kits, setKits] = useState([])
    const [kitsRerender, kitsRefresh] = useState(true)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/kit')
            .then(res => (setKits(res.data.map(kit => ({
                ...kit
            })))), rej => console.log(rej))
            .catch(err => console.log(err))
        setOpen(false)

    }, [kitsRerender])

    return (
        <>
            <div className={'row'}>
                <div className={'col 12 d-flex align-content-center justify-content-center'}>{open ?
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}
                                 kitsRerender={kitsRerender}/>
                    : <Button
                        variant={'contained'}
                        color={'secondary'}
                        size={'large'}
                        className={'col-3 m-2 mb-0'}
                        onClick={() => setOpen(!open)}
                    >ADD KIT</Button>}
                </div>

            </div>
            <div className={'row d-flex justify-content-center'}>
                <div className={'row d-flex justify-content-evenly col-10 text-white mt-2'}>
                    <label>TUL</label>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'TUL').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedOut={kit.kit_loadedOut} key={kit.kit_id} id={kit.kit_id}/>)}
                    <label>KC</label>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'KC').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedOut={kit.kit_loadedOut} key={kit.kit_id} id={kit.kit_id}/>)}
                    <label>DAL</label>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'DAL').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedOut={kit.kit_loadedOut} key={kit.kit_id} id={kit.kit_id}/>)}
                    <label>DEN</label>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'DEN').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedOut={kit.kit_loadedOut} key={kit.kit_id} id={kit.kit_id}/>)}

                </div>
            </div>
        </>
    )
}

export default Gear