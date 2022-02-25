import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({header, items, type, kitID, addButton}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12'} style={{minHeight: '380px'}}>
                {header}
                <div className={'col-12 d-flex flex-column align-items-center overflow-auto'} style={{height: '375px'}}>
                    {items?.map((item, index) => <GearItemCard key={index} data={item}/>)}
                </div>
            </div>

        </>
    )
}

export default GearListCard