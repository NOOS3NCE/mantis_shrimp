import React from "react";
import image from './images/2470canon.jpeg'

const GearItemCard = (props) => {
    const {title, brand, model, fStop} = props;
    return (
        <>
            <div className={'row m-2 p-1 d-flex justify-content-start'}>
                <div className={'col-3 p-2'}>
                    <img src={image} alt={'item'} style={{width: '50px'}}/>
                </div>
                <div className={'col-8'}>
                    <div className={'row'}>
                        <h5>{title}</h5>
                    </div>
                    <div className={'row'}>
                        <p>{`${brand} ${model} ${fStop}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GearItemCard