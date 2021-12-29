import React from "react";
import {Link} from "react-router-dom";


const MantisNavBar = () => {
    return (
        <div className={'col-1 bg-dark p-4'}>
            <h4 className={'col-10 text-white'}>MNTS</h4>
            <Link className={'row-col-1 text-white text-decoration-none p-2'} to={"/gear"}><p
                className={'text-center m-0 p-2'}>GEAR</p>
            < /Link>
            <Link className={'row-col-1 text-white text-decoration-none p-2'} to={"/home"}>
                <p className={'text-center m-0 p-2'}>HOME</p></Link>
        </div>
    )
}

export default MantisNavBar