import React from "react";

const ListHeader = ({headers}) => {
    return (
        <>
            <div className={'bg-glass rounded col-12 p-2 d-flex flex-row justify-content-center mt-3'}>
                <div className={'col-10 offset-2 d-flex flex-row justify-content-start'}>
                    {headers?.map((header, index) => <h6 key={index} className={'col p-0 m-0'}>{header}</h6>)}
                </div>
            </div>
        </>
    )
}

export default ListHeader