import React from "react";

const MantisCard = (props) => {

    return (
        <>
            <div className={'bg-dark col-3 rounded shadow'}>
                <img className={'row'}
                     src={"https://www.rivacase.com/images/virtuemart/product/resized/7490_black.4260403571811.ver01_205x205.jpg.pagespeed.ce.fAxSvGiloh.jpg"}
                     alt={"SVG of backpack"}/>
                <div className={'row d-flex align-content-between p-1'}>
                    <div className={'row'}>
                        <div className={'col-9 text-white'}>PRO 1</div>
                        <div className={'col-3 text-white'}>TUL</div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-3 text-white'}>IMG</div>
                        <div className={'col-9 text-white'}>First Name</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MantisCard