import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PageHeader from "./PageHeader";
import {Button} from "@mui/material";
import InfoCard from "../Cards/InfoCard";
import SectionHeader from "../Cards/SectionHeader";
import StatusCard from "../Cards/StatusCard";
import axios from "axios";
import {base_url} from "../../../env_variables";

const GearItemDetail = (props) => {
    const {id, type} = useParams();
    const defaultOpen = {
        toShop: false,
        toOffice: false,
    }
    const [item, setItem] = useState({})
    const [history, setHistory] = useState([])
    const [todos, setTodos] = useState([])
    const [open, setOpen] = useState(defaultOpen)

    useEffect(() => {
        axios.get(`${base_url}mantis_api/${type}/${id}`)
            .then(res => setItem(res?.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div style={{height: '40px'}} className={'d-flex flex-row justify-content-center'}>
                <PageHeader title={item[`${type}_display`]?.toUpperCase()}/>
            </div>
            <div className={`col d-flex flex-row justify-content-center align-items-start`}>
                <div
                    className={`page-container d-flex flex-wrap flex-row justify-content-around rounded`}>
                    <div className={'row flex-wrap'}>
                        <div className={'col-12 d-flex justify-content-end p-3 pb-1'}>
                            {item?.user_id !== null &&
                            < Button style={{maxHeight: '50px'}} variant={'contained'} size={'large'}
                                     className={'zoom bg-secondary col-4 m-2'}
                                     onClick={() => setOpen({...defaultOpen, toShop: true})}>TO SHOP</Button>
                            }
                            {item?.user_id === null &&
                            < Button style={{maxHeight: '50px'}} variant={'contained'} size={'large'}
                                     className={'zoom bg-secondary col-4 m-2'}
                                     onClick={() => setOpen({...defaultOpen, toOffice: true})}>TO OFFICE</Button>}
                        </div>
                        <div className={'row flex-wrap'}>
                            <div className={'col-xl-6 col-lg-12 m-0 p-2  details-card'}>
                                <InfoCard header={<SectionHeader title={'INFO'}/>}
                                          kit={item} todos={todos} type={type}/>
                            </div>
                            <div className={'col-xl-6 col-lg-12 m-0 p-2  details-card'}>
                                <StatusCard header={<SectionHeader className={'m-1'} title={'HISTORY'}/>}
                                            data={history}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GearItemDetail