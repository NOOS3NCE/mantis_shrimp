import React from "react";

const ClientInfoCard = (props) => {
    const {data, header} = props;

    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row justify-content-around'}>
                    <div className={'col-11 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>PRIMARY CONTACT</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.primary_contact?.client_firstname} ${data.primary_contact?.client_lastname}`}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>PHONE NUMBER</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.primary_contact?.client_phone}`}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>EMAIL</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.primary_contact?.client_email}`}</p>
                            </div>
                        </div>
                        <br/>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>SECONDARY CONTACT</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_firstname} ${data.secondary_contact?.client_lastname}`}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>PHONE NUMBER</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_phone}`}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>EMAIL</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_email}`}</p>
                            </div>
                        </div>
                        <br/>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>SHIPPING ADDRESS</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_address1}`}</p>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_address2}`}</p>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_city}, ${data.secondary_contact?.client_state} ${data.secondary_contact?.client_zip} `}</p>
                            </div>
                        </div>
                        <br/>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>BILLING ADDRESS</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_address1}`}</p>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_address2}`}</p>
                                <p className={'m-0'}>{`${data.secondary_contact?.client_city}, ${data.secondary_contact?.client_state} ${data.secondary_contact?.client_zip} `}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientInfoCard