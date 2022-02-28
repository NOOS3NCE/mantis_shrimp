import React from "react";
import {Button} from "@mui/material";

const SectionHeader = ({title, buttonOnClick, button, buttonText}) => {
    return (
        <div
            className={'section-header p-2 rounded col-12 d-flex flex-row align-items-center justify-content-between'}>
            <h2>{title}</h2>
            {button &&
            <Button onClick={buttonOnClick} variant={'contained'} size={'small'}
                    className={'zoom bg-secondary col-4'}>{buttonText}</Button>}
        </div>
    )
}

export default SectionHeader