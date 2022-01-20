import React from "react";
import lens from '../../../images/2470canon.jpeg'
import cam from '../../../images/5dmkivcanon.jpeg'
import {Link} from "react-router-dom";

const GearItemCard = (props) => {
    const {title, brand, model, type, image} = props;

    return (
        <>
            <div
                className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-between'}>
                <div className={'col-12 d-flex flex-row align-items-center justify-content-start'}>
                    <div className={'col-2'} style={{minWidth: '55px'}}>
                        <div
                            className={'bg-pureWhite rounded img-fluid d-flex align-items-center justify-content-center'}
                            style={{height: '55px', width: '55px'}}>
                            <Link className={'text-decoration-none'} to={`/gear`}>
                                <img
                                    src={image}
                                    alt={"SVG of backpack"} style={{height: '45px'}}/>
                            </Link>
                        </div>
                    </div>
                    <div className={'col-8'}>
                        <div className={'row'}>
                            <h5>{title}</h5>
                        </div>
                        <div className={'row list-h'}>
                            <p>{`${brand} ${model}mm`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GearItemCard