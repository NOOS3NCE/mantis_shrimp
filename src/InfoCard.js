import React from "react";

const InfoCard = (props) => {
    const {} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2'}>
                <h2>Info</h2>
                <hr/>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <p>Located in: </p>
                    </div>
                    <div className={'col-6'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <p>Status: </p>
                    </div>
                    <div className={'col-6'}>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <p>Loaded out to: </p>
                    </div>
                    <div className={'col-6'}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoCard