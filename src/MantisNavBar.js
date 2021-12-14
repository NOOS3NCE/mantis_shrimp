import React from "react";
import {Link} from "react-router-dom";


const MantisNavBar = () => {
    return (
        <>
            <div className={'row-col-12 bg-dark d-flex p-2'}>
                <h1 className={'col-10 text-white'}>MANTIS</h1>
                <Link className={'col-1 text-white text-decoration-none p-2'} to={"/gear"}><p
                    className={'text-center m-0 p-2'}>GEAR</p>
                < /Link>
                <Link className={'col-1 text-white text-decoration-none p-2'} to={"/home"}>
                    <p className={'text-center m-0 p-2'}>HOME</p></Link>
            </div>
        </>
    )
}

export default MantisNavBar