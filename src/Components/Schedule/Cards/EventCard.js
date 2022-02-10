import React from "react";
import {Link} from "react-router-dom";

const EventCard = (props) => {
    const {
        event,
    } = props
    return (
        <>
            <Link className={'text-decoration-none text-white'} to={`/home`}>
                <div
                    className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-center'}>
                    <div className={'col-12 d-flex flex-row flex-wrap align-items-center justify-content-start'}>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>DATE</h4>
                            <p>11/24/22</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>CITY</h4>
                            <p>DAL</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>PACKAGE</h4>
                            <p>2 PHOTO</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>LEAD</h4>
                            <p>Mike C.</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>SECOND</h4>
                            <p>Cody D.</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>COUPLE</h4>
                            <p>Jessica & Brian</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>VENUE</h4>
                            <p>Springs - Denton</p>
                        </div>
                        <div className={'col m-0 p-0 mx-1'}>
                            <h4 className={'list-h'}>LENGTH</h4>
                            <p>11:00AM - 10:00PM</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default EventCard