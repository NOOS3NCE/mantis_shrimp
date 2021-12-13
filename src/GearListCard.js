import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({title, items}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12 p-2 m-2 mt-4'}>
                <h2>{title}</h2>
                <hr/>
                {items?.map(item => <GearItemCard key={item.id} title={item.display} model={item.model}
                                                  brand={item.brand}/>)}
            </div>
        </>
    )
}

export default GearListCard