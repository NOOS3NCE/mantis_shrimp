import React from "react";
import {ButtonBase} from "@mui/material";

const InfoCard = (props) => {
    const {kit, setOpen, open, header} = props;
    return (
        <>
            <div className={'col-12'} style={{height: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row'}>
                    <div
                        className={'col-4 m-2 rounded bg-pureWhite d-flex flex-row justify-content-center align-items-center p-2'}
                        style={{height: '150px', width: '150px'}}>
                        <img src={kit?.kit_img} alt={'kit image'} className={'rounded'} style={{maxHeight: '125px'}}/>
                    </div>
                    <div className={'col-8 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>LOCATION</h4>
                            </div>
                            <div className={'col-6'}>
                                <ButtonBase children={<p className={'m-0'}>{kit?.city_code}</p>}/>

                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>TYPE</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{kit?.kit_type}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>STATUS</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{kit?.kit_status}</p>
                            </div>
                        </div>
                        {kit?.kit_status === 'Loaded Out' &&
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>SHOOTER</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{kit?.user?.user_firstname} {kit?.user?.user_lastname[0]}.</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard