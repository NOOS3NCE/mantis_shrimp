import React from "react";

const PageHeader = ({title}) => {
    return (
        <>
            <div
                className={'page-header col-10 d-flex flex-row justify-content-center align-items-center position-fixed'}>
                <h1>{title}</h1>
            </div>
            <div className={'header-top p-2 col-12 bg-blur fixed-top'}/>
            <div className={'col-12 m-auto fixed-top d-flex align-items-center justify-content-center'}>
                <div className={'header-bottom col-8 offset-1 p-2 bg-glass'}/>
            </div>
        </>
    )
}

export default PageHeader