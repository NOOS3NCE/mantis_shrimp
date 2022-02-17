import React from "react";
import HistoryCard from "./HistoryCard";

const StatusCard = ({header}) => {
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <HistoryCard title={"CHECKED OUT TO"} message={"Micah & Taylor 11/27/2021"}
                             sender={"Patrick K."} target={"Mike C."} date={"11/25/2022"}/>
            </div>
        </>
    )
}

export default StatusCard