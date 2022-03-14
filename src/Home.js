import React from "react";
import PageHeader from "./Components/Gear/Pages/PageHeader";
import dayjs from "dayjs";
import {weekdays} from "./Numbers";

const Home = () => {
    console.log("DAY:", weekdays[dayjs().day()])
    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={'DASHBOARD'}/>
            </div>
        </>
    )
}

export default Home