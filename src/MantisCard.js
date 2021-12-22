import React from "react";
import {Link} from "react-router-dom";
import backpack from './images/backpack.jpg'

const MantisCard = (props) => {

    const {name, location, loadedOut, id, shooter} = props;

    return (
        <>
            <div
                className={'bg-dark row rounded shadow m-1 p-0 text-white d-flex align-content-center justify-content-between'}>
                <Link className={'text-decoration-none'} to={`/gear/pack/${id}`}>
                    <div className={'row'}>
                        <div className={'col-1 my-2'}>
                            <img className={'rounded shadow'}
                                 src={backpack}
                                 alt={"SVG of backpack"} style={{height: '50px'}}/>
                        </div>
                        <div className={'col-2 text-white my-2'} style={{'font-size': '20px'}}><h6>NAME</h6>{name}</div>
                        <div className={'col-2 text-white my-2'} style={{'font-size': '20px'}}><h6>CITY</h6>{location}
                        </div>

                        <div className={'col-2 text-white my-2'}><h6>STATUS</h6>{loadedOut ? 'Loaded Out' : 'In Office'}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default MantisCard