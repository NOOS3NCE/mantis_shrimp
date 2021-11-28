import React from "react";
import {Link} from "react-router-dom";


const MantisNavBar = () => {
    return (
        <>
            <div className={'row bg-dark d-flex p-2'}>
                <p className={'col-10 text-white'}>NAVBAR</p>
                <Link className={'col-1 text-white text-decoration-none'} to={"/gear"}><p>GEAR</p></Link>
                <Link className={'col-1 text-white text-decoration-none'} to={"/home"}><p>HOME</p></Link>
            </div>
        </>
    )
}

export default MantisNavBar