import React from "react";

const StatusCard = ({header}) => {
    return (
        <>
            <div className={'col-12'} style={{height: '400px'}}>
                {header}
            </div>
        </>
    )
}

export default StatusCard