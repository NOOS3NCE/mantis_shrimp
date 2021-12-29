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
    useEffect(() => {
        console.log("KITS: ", kits)
    }, [open])

    return (
        <>
            <div className={'row'}>
                <div className={'col 12 d-flex align-content-center justify-content-center'}>{open ?
                    <NewKitForms setOpen={setOpen} open={open} kitsRefresh={kitsRefresh}
                                 kitsRerender={kitsRerender}/>
                    : <Button
                        variant={'contained'}
                        size={'large'}
                        className={'col-3 m-2 mb-0 bg-secondary'}
                        onClick={() => setOpen(!open)}
                    >ADD KIT</Button>}
                </div>

            </div>
            <div className={'row d-flex justify-content-center'}>
                <div className={'row d-flex justify-content-evenly col-10 text-white mt-2'}>
                    <h2 className={'mt-4'}>TUL</h2>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'TUL').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedout={kit.kit_loadedout} key={kit.kit_id} id={kit.kit_id} shooter={kit.user_firstname}
                        type={kit.kit_type.toUpperCase()}/>)}
                    <h2 className={'mt-4'}>KC</h2>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'KC').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedout={kit.kit_loadedout} key={kit.kit_id} id={kit.kit_id} shooter={kit.user_firstname}
                        type={kit.kit_type.toUpperCase()}/>)}
                    <h2 className={'mt-4'}>DAL</h2>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'DAL').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedout={kit.kit_loadedout} key={kit.kit_id} id={kit.kit_id} shooter={kit.user_firstname}
                        type={kit.kit_type.toUpperCase()}/>)}
                    <h2 className={'mt-4'}>DEN</h2>
                    <hr/>
                    {kits?.filter(kit => kit.city_code === 'DEN').map(kit => <MantisCard
                        name={kit.kit_display.toUpperCase()} location={kit.city_code}
                        loadedout={kit.kit_loadedout} key={kit.kit_id} id={kit.kit_id} shooter={kit.user_firstname}
                        type={kit.kit_type.toUpperCase()}/>)}

                </div>
            </div>
        </>
    )
}

export default Gear