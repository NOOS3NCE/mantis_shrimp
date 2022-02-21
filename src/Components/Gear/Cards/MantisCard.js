import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const MantisCard = (props) => {
    const {type, id, data} = props;
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <>
            <Link className={'text-decoration-none'} to={`/gear/pack/${id}`}>
                <div
                    className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-between'}>
                    <div className={'col-12 d-flex flex-row flex-wrap align-items-center justify-content-start'}>
                        <div className={'col-2'} style={{minWidth: '55px', maxHeight: '55px'}}>
                            <div
                                className={'bg-pureWhite rounded img-fluid d-flex align-items-center justify-content-center'}
                                style={{height: '55px', width: '55px'}}>
                                <img
                                    src={data?.hasOwnProperty('kit_status') ? data.kit_img : data.lens_img}
                                    alt={"SVG of backpack"} style={{height: '45px', maxWidth: '45px'}}/>
                            </div>
                        </div>
                        <div className={'col-10 d-flex align-items-center justify-content-start'}>
                            {data?.lens_display && <div className={'col m-0 p-0'}>
                                <p>{data?.lens_display.toUpperCase()}</p>
                            </div>}
                            {data?.kit_display && <div className={'col m-0 p-0'}>
                                <p>{data?.kit_display.toUpperCase()}</p>
                            </div>}
                            {data?.lens_brand && <div className={'col m-0 p-0'}>
                                <p>{data?.lens_brand}</p>
                            </div>}
                            {data?.lens_model && <div className={'col m-0 p-0'}>
                                <p>{data?.lens_model}mm</p>
                            </div>}
                            {data?.city_code && <div className={'col m-0 p-0'}>
                                <p>{data?.city_code}</p>
                            </div>}
                            {data?.kit_type && width > 764 && <div className={'col m-0 p-0'}>
                                <p>{data?.kit_type}</p>
                            </div>}
                            {data?.kit_status && <div className={'col m-0 p-0'}>
                                <p>{data?.kit_status}</p>
                            </div>}
                            {data?.hasOwnProperty('user_firstname') &&
                            <div className={'col m-0 p-0'}><p>{data?.user_firstname}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MantisCard