import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const MantisCard = (props) => {
    const {id, data, image, columns, link = '/gear/pack/'} = props;
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
            <Link className={'text-decoration-none'} to={`${link}${id}`}>
                <div
                    className={'main-list zoom p-0 px-2 my-1 d-flex align-items-center justify-content-between'}>
                    <div className={'col-12 d-flex flex-row flex-wrap align-items-center justify-content-start'}>
                        {image && <div className={'col-2'} style={{minWidth: '55px', maxHeight: '55px'}}>
                            <div
                                className={'bg-pureWhite rounded img-fluid d-flex align-items-center justify-content-center'}
                                style={{height: '55px', width: '55px'}}>
                                <img
                                    src={image}
                                    alt={"main"} style={{height: '45px', maxWidth: '45px'}}/>
                            </div>
                        </div>}
                        <div className={'col-10 d-flex align-items-center justify-content-start'}>
                            {data && columns?.map((column, index) =>
                                <div className={'col m-0 p-0'}>
                                    <p>{data[column]}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MantisCard