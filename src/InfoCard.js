import React from "react";
import {Button, ButtonBase} from "@mui/material";

const InfoCard = (props) => {
    const {kit, setOpen, open} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2'}>
                <div className={'row d-flex justify-content-between'}>
                    <h2 className={'col-6 pt-2 my-0 pb-0'}>Info</h2>
                    <Button variant={'contained'} size={'large'} className={'bg-secondary col-4 p-1 m-2 mb-0'}
                            onClick={() => setOpen(!open)}>LOAD OUT</Button>
                </div>
                <hr/>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Located in: </p>
                    </div>
                    <div className={'col-6'}>
                        <ButtonBase children={<p>{kit?.city_code}</p>}/>

                    </div>
                </div>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Status: </p>
                    </div>
                    <div className={'col-6'}>
                        {kit?.kit_loadedOut ? <p>Loaded Out</p> : <p>In Office</p>}
                    </div>
                </div>
                {kit?.kit_loadedOut &&
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Loaded out to: </p>
                    </div>
                    <div className={'col-6'}>
                        <p>{kit?.user?.user_firstname} {kit?.user?.user_lastname[0]}.</p>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default InfoCard