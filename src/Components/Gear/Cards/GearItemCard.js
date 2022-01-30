import React from "react";
import lens from '../../../images/2470canon.jpeg'
import cam from '../../../images/5dmkivcanon.jpeg'
import {Link} from "react-router-dom";

const GearItemCard = (props) => {
    const {title, brand, model, type, image} = props;

    return (
        <>
            <Link className={'text-decoration-none text-white py-2'} to={`/gear`}>
                <div
                    className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-between'}>
                    <div className={'col-12 d-flex flex-row align-items-center justify-content-start'}>
                        <div className={'col-2'} style={{minWidth: '55px'}}>
                            <div
                                className={'bg-pureWhite rounded img-fluid d-flex align-items-center justify-content-center'}
                                style={{height: '55px', width: '55px'}}>

                                <img
                                    src={image}
                                    alt={"SVG of backpack"} style={{height: '45px'}}/>
                            </div>
                        </div>
                        <div className={'col-10 d-flex align-items-center justify-content-start'}>
                            <div className={'col'}>
                                <h4 className={'list-h'}>LENS</h4>
                                <h5>{title}</h5>
                            </div>
                            <div className={'col'}>
                                <h4 className={'list-h'}>MODEL</h4>
                                <h5>{model}</h5>
                            </div>
                            <div className={'col'}>
                                <h4 className={'list-h'}>BRAND</h4>
                                <h5>{brand}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default GearItemCard