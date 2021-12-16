import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import HeroCard from "./HeroCard";
import InfoCard from "./InfoCard";
import GearListCard from "./GearListCard";
import StatusCard from "./StatusCard";
import {InputUnstyled, MenuItem, Select, TextField} from "@mui/material";
import {Label} from "@mui/icons-material";
import {Dropdown} from "react-bootstrap";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({})
    const [open, setOpen] = useState(false)
    console.log("KIT ID: ", id)

    useEffect(() => {
        axios.get(`http://localhost:3001/kit/${id}`)
            .then(res => {
                setKit(res.data)
                console.log("RES: ", res)
            }, rej => (console.log(rej)))
            .catch(err => console.log(err))
    }, [])
    console.log("KIT DETAIL: ", kit)

    return (
        <>
            <div className={`row ${open && 'd-flex justify-content-around '}`}>
                <div
                    className={`d-flex justify-content-evenly col-${open ? 8 : 10} offset-${open ? 0 : 1} shadow rounded mt-2`}>
                    <div className={'col-sm-12 col-md-5  m-2'}>
                        <HeroCard title={kit.display}/>
                        <GearListCard title={'Lenses'} items={kit.lenses}/>
                    </div>
                    <div className={' col-sm-12 col-md-5 m-2'}>
                        <InfoCard kit={kit} setOpen={setOpen} open={open}/>
                        <StatusCard/>
                    </div>
                </div>
                {open && <div className={'d-flex justify-items-start col-3 mt-2 rounded'}>
                    <form>
                        <div className={'row'}>
                            <h3> Edit</h3>
                        </div>
                        <label>Kit Name</label>
                        <TextField
                            className={'col-12 mt-2'}
                            defaultValue={kit.display}/>

                        <Select label={'City'}
                                size={'large'}
                                className={'col-12 mt-2'}
                                defaultValue={kit.city}>
                            <MenuItem value={0}>TUL</MenuItem>
                            <MenuItem value={1}>KC</MenuItem>
                            <MenuItem value={2}>DAL</MenuItem>
                            <MenuItem value={3}>DEN</MenuItem>
                        </Select>
                    </form>
                </div>}
            </div>
        </>
    )
}

export default PackDetail