import React from "react";
import {Button, ButtonBase} from "@mui/material";
import {SmartButtonOutlined} from "@mui/icons-material";

const InfoCard = (props) => {
    const {kit, setOpen, open} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2'}>
                <div className={'row d-flex justify-content-between'}>
                    <h2 className={'col-6 pt-2'}>Info</h2>
                    <Button variant={'outlined'} size={'small'} className={'col-2 p-1 m-2 mb-0'}
                            onClick={() => setOpen(!open)}>EDIT</Button>
                </div>
                <hr/>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Located in: </p>
                    </div>
                    <div className={'col-6'}>
                        <ButtonBase children={<p>{kit?.city}</p>}/>

                    </div>
                </div>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Status: </p>
                    </div>
                    <div className={'col-6'}>
                        {kit?.loaded_out ? <p>Loaded Out</p> : <p>In Office</p>}
                    </div>
                </div>
                {kit?.loaded_out &&
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Loaded out to: </p>
                    </div>
                    <div className={'col-6'}>
                        <p>{kit?.user?.first_name} {kit?.user?.last_name[0]}.</p>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default InfoCard