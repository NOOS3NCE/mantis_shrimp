import React, {useState} from "react";
import {Controller} from "react-hook-form";
import {FileUploadOutlined, InsertDriveFileOutlined} from "@mui/icons-material";
import {ReactComponent as MantisUploadIcon} from '../../Upload.svg'
import {ReactComponent as MantisUploadImageSuccessIcon} from '../../Image-File.svg'

export const MantisSearchField = (props) => {
    const {
        name,
        control,
        onChange,
        defaultValue,
        col,
        startAdornment,
        endAdornment,
        placeholder,
        required,
        type
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-0 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <input
                        {...field}
                        className={'col-9 text-field mx-0 p-0 ps-2'}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}/>
                    {endAdornment && <div className={'m-0 me-1 p-1'}>
                        {endAdornment}
                    </div>}
                </div>}
                onChange={() => onChange()}
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </>
    )
}
export const MantisTextField = (props) => {
    const {
        name,
        control,
        onChange,
        defaultValue,
        col,
        startAdornment,
        endAdornment,
        placeholder,
        required,
        type
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-0 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <input
                        {...field}
                        className={'col text-field mx-0 p-0 ps-2'}
                        placeholder={placeholder}
                        required={required}
                        style={{fontSize: '16px'}}
                    />
                    {endAdornment && <div className={'m-0 me-1 p-1'}>
                        {endAdornment}
                    </div>}
                </div>}
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </>
    )
}
export const MantisDateField = (props) => {
    const {
        name,
        control,
        onChange,
        onBlur,
        defaultValue,
        col,
        startAdornment,
        endAdornment,
        placeholder,
        required,
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-0 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <input
                        {...field}
                        className={'col text-field mx-0 p-0 ps-2'}
                        placeholder={placeholder}
                        required={required}
                        type={'date'}
                        style={{cursor: 'text', fontSize: '16px'}}

                    />
                    {endAdornment && <div className={'m-0 me-1 p-1'}>
                        {endAdornment}
                    </div>}
                </div>}
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </>
    )
}
export const MantisUploadField = (props) => {
    const {
        name,
        control,
        defaultValue,
        col,
        placeholder,
        required,
        accept
    } = props
    const [fileName, setFilename] = useState('No File Chosen')
    const [upload, setUpload] = useState(true)
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 m-1 col-${col} upload-field d-flex align-items-center justify-content-center`}>
                    <div className={'d-flex flex-column align-items-center justify-content-center m-2'}>
                        {upload ? <MantisUploadIcon height={'100px'} fill={'white'} className={'m-1 p-1'}/> :
                            <MantisUploadImageSuccessIcon height={'100px'} fill={'white'} className={'m-1 p-1'}/>}
                        <span>{fileName}</span>
                        <input
                            {...field}
                            type={'file'}
                            className={'col-12 text-field mx-0 p-0 ps-2'}
                            onChange={(e) => {
                                setUpload(false)
                                setFilename(e.target.files[0].name)
                            }}
                            accept={accept}
                            placeholder={placeholder}
                            required={required}
                            id="actual-btn"
                            hidden
                        />
                        {upload && <label htmlFor="actual-btn" className={'upload-button m-1'}>UPLOAD IMAGE</label>}
                    </div>
                </div>}
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </>
    )
}
export const MantisSelect = (props) => {
    const {
        name,
        control,
        defaultValue,
        col,
        children,
        required,
        onChange,
    } = props

    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 m-1 col-${col} form-field d-flex align-items-center justify-content-center`}
                    style={{cursor: 'pointer'}}>
                    <select
                        {...field}
                        className={'col-12 text-field m-0 p-0'}
                        style={{fontSize: '16px', cursor: 'pointer'}}
                    >
                        {children}
                    </select>
                </div>}
                required={required}
                name={name}
                onChange={() => onChange()}
                control={control}
                defaultValue={defaultValue}
            />
        </>
    )
}
