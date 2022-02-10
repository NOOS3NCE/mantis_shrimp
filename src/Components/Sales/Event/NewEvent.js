import React from "react";
import PageHeader from "../../Gear/Pages/PageHeader";
import {useForm} from "react-hook-form";

const NewEvent = () => {
    const {handleSubmit, register} = useForm()
    const onSubmitNewEvent = () => {
        console.log("SUBMITTED")
    }
    return (
        <>
            <div style={{height: '60px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={"NEW EVENT"}/>
            </div>
            <div className={'d-flex col-12 flex-row justify-content-center'}>
                <div className={'page-container col-10 rounded'}>
                    <form onSubmit={handleSubmit(onSubmitNewEvent)}>

                    </form>
                </div>
            </div>
        </>
    )
}

export default NewEvent