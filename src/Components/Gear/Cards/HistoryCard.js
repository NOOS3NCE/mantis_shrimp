import React from "react";

const HistoryCard = (props) => {
    const {message, target, sender, date, title} = props
    return (
        <>
            <div
                className={'main-list zoom p-2 my-1 d-flex align-items-center justify-content-between'}>
                <div className={'col-12 d-flex flex-column align-items-center justify-content-start'}>
                    <div className={'col-12 d-flex flex-row justify-content-between align-items-center'}>
                        <div className={'col-6'}>
                            <h4 className={'list-h'}>{title} - {target}</h4>
                        </div>
                        <div className={'col-3'}>
                            <h4 className={'list-h'}>BY - {sender}</h4>
                        </div>
                        <div className={'col-3'}>
                            <h4 className={'list-h'}>ON - {date}</h4>
                        </div>
                    </div>
                    <div className={'col-12 d-flex flex-row justify-content-between align-items-center'}>
                        <div className={'col-8'}>
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryCard