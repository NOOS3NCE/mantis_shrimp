import React from "react";
import HistoryCard from "./HistoryCard";

const StatusCard = ({header, data}) => {
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                {data && data.map(history => <HistoryCard title={history.history_title}
                                                          message={history.history_message}
                                                          sender={history.history_sender}
                                                          target={history.history_target}
                                                          date={history.history_updated_at}/>)
                }
            </div>
        </>
    )
}

export default StatusCard