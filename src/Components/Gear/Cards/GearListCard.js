import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({header, items}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-column align-items-center scroll-y'}
                     style={{height: '375px'}}>
                    {items?.map((item, index) => <GearItemCard key={index} data={item}/>)}
                </div>
            </div>

        </>
    )
}

export default GearListCard