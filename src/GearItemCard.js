import React from "react";
import image from './images/2470canon.jpeg'

const GearItemCard = (props) => {
    const {title, brand, model} = props;
    return (
        <>
            <div className={'row m-1 p-1 d-flex shadow-sm rounded align-content-center justify-content-start'}>
                <img className={'col-3 rounded shadow d-flex  p-2 bg-light'}
                     src={image} alt={'Gear Item'} style={{width: '15%', height: '15%'}}/>
                <div className={'col-8'}>
                    <div className={'row'}>
                        <h5>{title}</h5>
                    </div>
                    <div className={'row'}>
                        <p>{`${brand} ${model}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GearItemCard