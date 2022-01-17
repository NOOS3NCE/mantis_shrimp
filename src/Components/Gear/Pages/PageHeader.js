import React from "react";

const PageHeader = ({title}) => {
    return (
        <>
            <div className={'page-header fixed-top text-center mt-2'}>
                <h1>{title}</h1>
            </div>
            <div className={'header-top p-2 col-12 bg-blur fixed-top'}/>
            <div className={'header-bottom col-8 p-2 bg-glass fixed-top'}/>
        </>
    )
}

export default PageHeader