import React from "react";
import {Link} from "react-router-dom";


const MantisNavBar = () => {
    return (
        <>
            <div className={''}>
                <p>NAVBAR</p>
                <Link to={"/gear"}>Gear</Link>
                <Link to={"/home"}>Home</Link>
            </div>
        </>
    )
}

export default MantisNavBar