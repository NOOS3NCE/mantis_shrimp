import React from "react";

const InfoCard = (props) => {
    const {kit} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2'}>
                <h2>Info</h2>
                <hr/>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Located in: </p>
                    </div>
                    <div className={'col-6'}>
                        <p>{kit?.city}</p>
                    </div>
                </div>
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Status: </p>
                    </div>
                    <div className={'col-6'}>
                        {kit?.loaded_out ? <p>Loaded Out</p> : <p>In Office</p>}
                    </div>
                </div>
                {kit?.loaded_out &&
                <div className={'row d-flex justify-content-between'}>
                    <div className={'col-6'}>
                        <p>Loaded out to: </p>
                    </div>
                    <div className={'col-6'}>
                        <p>{kit?.user?.first_name} {kit?.user?.last_name[0]}.</p>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default InfoCard