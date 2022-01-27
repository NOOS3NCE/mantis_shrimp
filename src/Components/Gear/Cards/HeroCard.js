import React from "react";
import image from '../../../images/backpack.jpg'
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const HeroCard = (props) => {
    const {title, id, kitsRefresh} = props;
    let navigate = useNavigate();
    const deleteKit = (id) => {
        console.log("ID: ", id)
        axios.delete(`https://45.63.64.58:3001/mantis_api/kit/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/gear')
    }
    return (
        <>
            <div className={'col-12'}>
                <div className={'row d-flex justify-content-between align-items-center'}>
                    <h2 className={'col-6 m-0'}>{title}</h2>
                    <Button
                        onClick={() => deleteKit(id)}
                        className={'col-1 text-secondary'}
                        style={{backgroundColor: 'transparent'}}
                    ><Close/></Button>
                </div>
                <hr className={'my-3'}/>
                < div className={'col-8'}>
                    <img className={'rounded'} src={image} alt={'kit pack'}/>
                </div>
            </div>
        </>
    )
}

export default HeroCard