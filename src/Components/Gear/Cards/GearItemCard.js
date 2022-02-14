import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const GearItemCard = (props) => {
    const {title, brand, model, type, image, data} = props;
    const [keys, setKeys] = useState({})
    useEffect(() => {
        if (Object.keys(data)[0].includes("lens")) {
            setKeys({
                brand: 'lens_brand',
                model: 'lens_model',
                title: 'lens_display',
                nameHeader: 'LENS',
                image: 'lens_img',
            })
        } else if (Object.keys(data)[0].includes("camera")) {
            setKeys({
                brand: 'camera_brand',
                model: 'camera_model',
                title: 'camera_display',
                nameHeader: 'CAMERA',
                image: 'camera_img',
            })
        }
    }, [])


    return (
        <>
            <Link className={'text-decoration-none text-white py-2'} to={`/gear`}>
                <div
                    className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-between'}>
                    <div className={'col-12 d-flex flex-row align-items-center justify-content-start'}>
                        <div className={'col-2'} style={{minWidth: '55px', maxHeight: '55px'}}>
                            <div
                                className={'bg-pureWhite rounded img-fluid d-flex align-items-center justify-content-center'}
                                style={{height: '55px', width: '55px'}}>

                                <img
                                    src={data[keys?.image]}
                                    alt={"SVG of backpack"} style={{maxHeight: '45px', maxWidth: '45px'}}/>
                            </div>
                        </div>
                        <div className={'col-10 d-flex align-items-center justify-content-start'}>
                            <div className={'col'}>
                                <h4 className={'list-h'}>{keys?.nameHeader}</h4>
                                <h5>{data[keys?.title]}</h5>
                            </div>
                            <div className={'col'}>
                                <h4 className={'list-h'}>MODEL</h4>
                                <h5>{data[keys?.model]}</h5>
                            </div>
                            <div className={'col'}>
                                <h4 className={'list-h'}>BRAND</h4>
                                <h5>{data[keys?.brand]}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default GearItemCard