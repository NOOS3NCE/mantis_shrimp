import React from "react";

const PackageDetailsCard = (props) => {
    const {data, header} = props;

    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row justify-content-around'}>
                    <div className={'col-11 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>PACKAGE</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>1 Photo + 2 Video</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>TIME</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>8 Hour Block</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>ADD ONS</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>Gold label photo</p>
                                <p className={'m-0'}>Drone</p>
                                <p className={'m-0'}>6-8 Week turnaround</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageDetailsCard