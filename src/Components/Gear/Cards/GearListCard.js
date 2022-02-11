import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({header, items, type, kitID, addButton}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                <div className={'col-12'}> {header}</div>
                {items?.map((item, index) => <GearItemCard key={index} data={item}/>)}
            </div>

        </>
    )
}

export default GearListCard