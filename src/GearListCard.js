import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = (props) => {
    const {title} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2 mt-4'}>
                <h2>{title}</h2>
                <hr/>
                <GearItemCard title={'EP 50 15'} brand={'Canon'} model={'50mm'} fStop={'f 1.8'}/>
                <GearItemCard title={'EP 85 15'} brand={'Tamron'} model={'85mm'} fStop={'f 1.8'}/>
                <GearItemCard title={'EP 24-70 15'} brand={'Sigma'} model={'24-70mm'} fStop={'f 2.8'}/>
                <GearItemCard title={'EP 70-200 15'} brand={'Canon'} model={'70-200mm'} fStop={'f 2.8'}/>
            </div>
        </>
    )
}

export default GearListCard