import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";

const PackDetail = () => {
    const {id} = useParams()
    const [kit, setKit] = useState({});
    console.log("KIT ID: ", id)

    useEffect(() => {
        axios.get(`http://localhost:3001/kit/${id}`)
            .then(res => {
                setKit(res.data[0])
            }, rej => (console.log(rej)))
            .catch(err => console.log(err))
    }, [])
    console.log("KIT DETAIL: ", kit)

    return (
        <>
            <div className={'row'}>
                <strong>{kit.display}</strong>
            </div>
        </>
    )
}

export default PackDetail