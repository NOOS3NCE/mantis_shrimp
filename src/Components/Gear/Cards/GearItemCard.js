import React from "react";
import lens from '../../../images/2470canon.jpeg'
import cam from '../../../images/5dmkivcanon.jpeg'

const GearItemCard = (props) => {
    const {title, brand, model, type} = props;
    let image;
    if (type === 'cam') {
        image = cam
    } else {
        image = lens
    }
    return (
        <>
            <div
                className={'zoom row m-1 my-2 p-2 d-flex align-items-center shadow rounded'}>
                <div className={'col-3 rounded shadow p-2'} style={{'width': '70px', background: 'white'}}>
                    <img
                        style={{height: '50px'}}
                        src={image} alt={'Gear Item'}
                    />
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
        </>
    )
}

export default GearItemCard