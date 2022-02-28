import React from "react";
import {ButtonBase} from "@mui/material";

const UserInfoCard = (props) => {
    const {user, setOpen, open, header} = props
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row'}>
                    <div
                        className={'col-4 m-2 rounded bg-pureWhite d-flex flex-row justify-content-center align-items-center p-2'}
                        style={{height: '150px', width: '150px'}}>
                        <img src={user?.user_img} alt={'kit image'} className={'rounded'} style={{maxHeight: '125px'}}/>
                    </div>
                    <div className={'col-8 m-2'}>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>LOCATION</h4>
                            </div>
                            <div className={'col-6'}>
                                <ButtonBase children={<p className={'m-0'}>{user?.city_code}</p>}/>

                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>FIRST NAME</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{user?.user_firstname}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>LAST NAME</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{user?.user_lastname}</p>
                            </div>
                        </div>
                        <div className={'row d-flex justify-content-between'}>
                            <div className={'col-6'}>
                                <h4 className={'list-title'}>EMAIL</h4>
                            </div>
                            <div className={'col-6'}>
                                <p className={'m-0'}>{user?.user_email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className={'col-12 d-flex flex-column overflow-auto justify-content-center align-items-center'}>*/}
                {/*    {todos && todos.map(todo => (*/}
                {/*        <div*/}
                {/*            className={`col-12 p-1 px-2 my-1 rounded shadow-sm zoom d-flex flex-row justify-content-between align-items-center priority-${todo.priority}`}*/}
                {/*            style={{maxHeight: '40px', maxWidth: '510px', color: 'white'}}>*/}
                {/*            <p className={'m-0'}>{todo.content}</p>*/}
                {/*            <p className={'m-0'}>{dayjs(todo.due?.datetime).format("MM/DD/YYYY")}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default UserInfoCard