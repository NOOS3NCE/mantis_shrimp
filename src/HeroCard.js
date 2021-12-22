import React from "react";
import image from './images/backpack.jpg'
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const HeroCard = (props) => {
    const {title, id, kitsRefresh} = props;
    let navigate = useNavigate();
    const deleteKit = (id) => {
        console.log("ID: ", id)
        axios.delete(`http://localhost:3001/kit/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/gear')
    }
    return (
        <>
            <div className={'row d-flex m-2'}>
                <div className={'col-10 m-0 p-0'}>
                    <h2>{title}</h2>
                </div>
                <div className={'col-1'}>
                    <Button
                        onClick={() => deleteKit(id)}
                        className={'col-1'}
                        color={'secondary'}
                        style={{backgroundColor: 'transparent'}}
                    ><Close/></Button>
                </div>
                <hr/>
                <div className={'col-8'}>
                    <img className={'rounded'} src={image} alt={'kit pack'}/>
                </div>
            </div>
        </>
    )
}

export default HeroCard