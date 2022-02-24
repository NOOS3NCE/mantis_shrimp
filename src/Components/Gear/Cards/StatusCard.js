import React from "react";
import HistoryCard from "./HistoryCard";

const StatusCard = ({header, data}) => {
    return (
        <>
            <div className={'col-12'}>
                {header}
                <div className={'col-12 d-flex flex-column align-items-center overflow-auto'}
                     style={{height: '380px'}}>
                    {data && data.map(history => <HistoryCard title={history.history_title}
                                                              message={history.history_message}
                                                              sender={history.history_sender}
                                                              target={history.history_target}
                                                              date={history.history_updated_at}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default StatusCard