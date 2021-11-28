import React from "react";
import MantisCard from "./MantisCard";

const Gear = () => {
    return (
        <>
            <div className={''}>
                <p>GEAR</p>
            </div>
            <div className={'row d-flex justify-content-between m-5'}>
                <MantisCard/>
                <MantisCard/>
                <MantisCard/>
            </div>
        </>
    )
}

export default Gear