import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({header, items, type, kitID, addButton}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-column align-items-center'}>
                    {items?.map((item, index) => <GearItemCard key={index} data={item}/>)}
                </div>
            </div>

        </>
    )
}

export default GearListCard