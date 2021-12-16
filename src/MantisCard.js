import React from "react";
import {Link} from "react-router-dom";
import backpack from './images/backpack.jpg'

const MantisCard = (props) => {

    const {name, location, loadedOut, id, shooter} = props;

    return (
        <>
            <div className={'bg-dark col-3 rounded shadow m-1 p-0 text-white'}
                 style={{width: '300px', height: '400px'}}>
                <Link className={'text-decoration-none'} to={`/gear/pack/${id}`}>
                    <img className={'card-img-top'} style={{width: '300px'}}
                         src={backpack}
                         alt={"SVG of backpack"}/>
                    {/*<BackpackOutlined style={{*/}
                    {/*    color: 'white',*/}
                    {/*    transform: 'scale(8)'*/}
                    {/*}}*/}
                    {/*                  className={'m-4'}/>*/}
                    <div className={'row d-flex justify-content-evenly p-2 pt-3 text-white'}>
                        <div className={'row'}>
                            <div className={'col-6 text-white'} style={{'font-size': '20px'}}>{name}</div>
                            <div className={'col-6 text-white'} style={{'font-size': '20px'}}>{location}</div>
                        </div>
                        {loadedOut && <div className={'row pt-2'}>
                            <div className={'col-6 text-white'}>Loaded Out
                            </div>
                        </div>}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default MantisCard