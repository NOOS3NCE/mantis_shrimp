import React from "react";
import dayjs from "dayjs";

const HistoryCard = (props) => {
    const {message, target, sender, date, title, user} = props
    return (
        <>
            <div
                className={'zoom col-12 main-list p-2 m-1 d-flex align-items-center justify-content-between'}
                style={{maxWidth: '510px'}}>
                <div className={'col-12 d-flex flex-column align-items-center justify-content-start'}>
                    <div className={'col-12 d-flex flex-row justify-content-between align-items-center'}>
                        <div className={'col-6'}>
                            <h4 className={'list-h'}>{title} {target?.toUpperCase()}</h4>
                        </div>
                        <div className={'col-3'}>
                            {sender?.length && <h4 className={'list-h'}>FROM - {sender?.toUpperCase()}</h4>}
                        </div>
                        <div className={'col-3'}>
                            <h4 className={'list-h'}>ON - {dayjs(date).format("MM/DD/YYYY")}</h4>
                        </div>
                    </div>
                    <div className={'col-12 d-flex flex-row justify-content-between align-items-center'}>
                        <div className={'col-8'}>
                            <p>{message}</p>
                        </div>
                        <div className={'col-2'}>
                            {user?.length && <p>{user}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryCard