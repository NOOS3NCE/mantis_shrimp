import React, {useState} from "react";
import {Link} from "react-router-dom";
import backpack from './images/backpack.jpg'

const MantisCard = (props) => {
    const {name, location, loadedout, id, shooter, type} = props;

    return (
        <>
            <div
                className={'zoom-card bg-dark row rounded shadow m-1 py-3 p-0 text-white d-flex align-items-center justify-items-center'}>
                <div className={'row'}>
                    <div className={'col-2 my-2 me-2'}>
                        <Link className={'text-decoration-none'} to={`/gear/pack/${id}`}>
                            <img className={'rounded shadow'}
                                 src={backpack}
                                 alt={"SVG of backpack"} style={{height: '75px'}}/>
                        </Link>
                    </div>
                    <div className={'col-2 text-white my-2 me-4'} style={{'font-size': '20px'}}><h6>NAME</h6>{name}
                    </div>
                    <div className={'col-1 text-white my-2 me-4'} style={{'font-size': '20px'}}><h6>CITY</h6>{location}
                    </div>
                    <div className={'col-1 text-white my-2 me-4'}>
                        <h6>TYPE</h6>{type}
                    </div>
                    <div className={'col-2 text-white my-2'}><h6>STATUS</h6>{loadedout ? 'Loaded Out' : 'In Office'}
                    </div>
                    {loadedout && <div className={'col-2 text-white my-2'}>
                        <h6>SHOOTER</h6>{shooter}
                    </div>}
                </div>
            </div>
        </>
    )
}

export default MantisCard