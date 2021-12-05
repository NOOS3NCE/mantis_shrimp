import React, {useEffect, useState} from "react";
import MantisCard from "./MantisCard";
import axios from "axios";


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
            <div className={'row d-flex justify-content-evenly col-8 offset-2'}>
                {kits.map(kit => <MantisCard name={kit.display.toUpperCase()} location={kit.location}
                                             checkedOut={kit.checkedout} key={kit.id} id={kit.id}/>)}
            </div>
        </>
    )
}

export default Gear