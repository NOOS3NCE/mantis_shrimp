import React from "react";
import {ButtonBase} from "@mui/material";

const InfoCard = (props) => {
    const {kit, setOpen, open, header} = props;
    return (
        <>
            <div className={'col-12'}>
                {header}
                <div className={'col-11 m-2'}>
                    <div className={'row d-flex justify-content-between'}>
                        <div className={'col-6'}>
                            <p className={'m-0'}>Located in: </p>
                        </div>
                        <div className={'col-6'}>
                            <ButtonBase children={<p className={'m-0'}>{kit?.city_code}</p>}/>

                        </div>
                    </div>
                    <div className={'row d-flex justify-content-between'}>
                        <div className={'col-6'}>
                            <p className={'m-0'}>Status: </p>
                        </div>
                        <div className={'col-6'}>
                            <p className={'m-0'}>{kit?.kit_status}</p>
                        </div>
                    </div>
                    {kit?.kit_loadedOut &&
                    <div className={'row d-flex justify-content-between'}>
                        <div className={'col-6'}>
                            <p className={'m-0'}>Loaded out to: </p>
                        </div>
                        <div className={'col-6'}>
                            <p className={'m-0'}>{kit?.user?.user_firstname} {kit?.user?.user_lastname[0]}.</p>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default InfoCard