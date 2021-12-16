import React, {useEffect, useState} from "react";
import MantisCard from "./MantisCard";
import axios from "axios";
import {Link} from "react-router-dom";
import Home from "./Home";


const Gear = () => {
    const [kits, setKits] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/kit')
            .then(res => (setKits(res.data.map(kit => ({
                ...kit
            })))), rej => console.log(rej))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className={'row d-flex justify-content-evenly col-10 offset-1 text-white mt-2'}>
                {kits?.map(kit => <MantisCard name={kit.display.toUpperCase()} location={kit.city}
                                              loadedOut={kit.loaded_out} key={kit.id} id={kit.id}/>)}
            </div>
        </>
    )
}

export default Gear