import React from "react";
import GearItemCard from "./GearItemCard";

const GearListCard = ({header, items, type, kitID, addButton}) => {
    console.log("ITEMS: ", items)
    return (
        <>
            <div className={'col-12'}>
                <div className={'col-12'}> {header}</div>
                {items?.map(item => <GearItemCard key={item.lens_id} title={item.lens_display}
                                                  model={item.lens_model}
                                                  brand={item.lens_brand} type={type} image={item.lens_img}/>)}
            </div>

        </>
    )
}

export default GearListCard