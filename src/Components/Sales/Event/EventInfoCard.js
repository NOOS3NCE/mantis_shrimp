import React from "react";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

const EventInfoCard = (props) => {
    const {data, header, weather} = props;

    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row justify-content-around'}>
                    <div className={'col-11 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>VENUE</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{<a style={{textDecoration: 'none', color: 'white'}}
                                                         href={`https://www.google.com/search?q=${data.venue?.venue_name.split(' ').join('+')}`}>{data.venue?.venue_name}</a>}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>ADDRESS</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.venue?.venue_address1}`}</p>
                                <p className={'m-0'}>{`${data.venue?.venue_address2}`}</p>
                                <p className={'m-0'}>{`${data.venue?.venue_city}, ${data.venue?.venue_state} ${data.venue?.venue_zip} `}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {weather ? weather : null}
            </div>
        </>
    )
}

export default EventInfoCard