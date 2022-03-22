import React from "react";
import dayjs from "dayjs";

const EventInfoCard = (props) => {
    const {data, header} = props;

    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row justify-content-around'}>
                    <div className={'col-11 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>LOCATION</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{data.venue?.venue_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventInfoCard