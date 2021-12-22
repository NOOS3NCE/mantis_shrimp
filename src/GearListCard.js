import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({title, items}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12 p-2 m-2 mt-4'}>
                <h2>{title}</h2>
                <hr/>
                {items?.map(item => <GearItemCard key={item.lens_id} title={item.lens_display} model={item.lens_model}
                                                  brand={item.lens_brand}/>)}
            </div>
        </>
    )
}

export default GearListCard