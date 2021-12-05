import React from "react";
import {Link} from "react-router-dom";
import backpack from './images/backpack.jpg'

const MantisCard = (props) => {

    const {name, location, checkedOut, id} = props;

    return (
        <>
            <div className={'bg-dark col-3 rounded shadow m-1 p-0'} style={{width: '300px', height: '400px'}}>
                <Link className={'text-decoration-none'} to={`/gear/pack/${id}`}>
                    <img className={'img-fluid'} style={{width: '300px'}}
                         src={backpack}
                         alt={"SVG of backpack"}/>
                    <div className={'row d-flex align-content-between p-2'}>
                        <div className={'row'}>
                            <div className={'col-9 text-white'}>{name}</div>
                            <div className={'col-3 text-white'}>{location}</div>
                        </div>
                        <div className={'row'}>
                            {checkedOut ? <div className={'col-6 text-white'}>Checked Out to:</div> :
                                <div className={'col-6 text-white'}>In Office</div>}

                            <div className={'col-6 text-white'}>First Name</div>
                        </div>

                    </div>
                </Link>
            </div>
        </>
    )
}

export default MantisCard