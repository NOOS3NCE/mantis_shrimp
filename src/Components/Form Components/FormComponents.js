import React, {useState} from "react";
import {Controller} from "react-hook-form";
import {ReactComponent as MantisUploadIcon} from '../../Upload.svg'
import {ReactComponent as MantisUploadImageSuccessIcon} from '../../Image-File.svg'
import {createStyles, MenuItem, TextField, withStyles} from "@mui/material";
import {makeStyles} from '@mui/styles';
import LocalizationProvider from "@mui/lab/LocalizationProvider/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker/DatePicker";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {},
        dropdownStyle: {
            maxHeight: '300px',
            overflow: 'auto',
            backgroundColor: "#47667701",
            padding: '4px',
            // border: '1px solid #FFFFFF55',
            'backdrop-filter': "blur(8px) brightness(90%)",
        },
        icon: {
            color: 'white',
        },
        list: {
            padding: '7px',
            backgroundColor: "#47667701",
            'backdrop-filter': "blur(8px)",
            "&:hover": {
                backgroundColor: "#c0e0f033"
            },
            "&:focus": {
                backgroundColor: "#c0e0f033"
            },
        },
    }))


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
        ...rest
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <TextField
                        {...field}
                        {...rest}
                        variant={'standard'}
                        InputProps={{disableUnderline: true}}
                        sx={{input: {color: 'white'}}}
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
        ...rest
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <TextField
                        {...field}
                        {...rest}
                        variant={'standard'}
                        InputProps={{disableUnderline: true}}
                        sx={{input: {color: 'white'}}}
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
        ...rest
    } = props
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    {startAdornment && <div className={'m-0 me-1 p-1'}>
                        {startAdornment}
                    </div>}
                    <TextField
                        {...field}
                        {...rest}
                        className={'col text-field mx-0 p-0 ps-2'}
                        placeholder={placeholder}
                        required={required}
                        variant={'standard'}
                        InputProps={{disableUnderline: true}}
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

export const MantisDateField2 = (props) => {
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
        ...rest
    } = props
    const [value, setValue] = useState()
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} form-field d-flex align-items-center justify-content-between`}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            {...rest}
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) =>
                                <TextField
                                    {...field}
                                    {...rest}
                                    className={'col text-field mx-0 p-0 ps-2'}
                                    placeholder={placeholder}
                                    required={required}
                                    variant={'standard'}
                                    InputProps={{disableUnderline: true}}
                                    style={{cursor: 'text', fontSize: '16px'}}
                                />}/>
                    </LocalizationProvider></div>}
                name={name}
                control={control}
                defaultValue={defaultValue}/>
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
        accept,
        ...rest
    } = props
    const [fileName, setFilename] = useState('No File Chosen')
    const [upload, setUpload] = useState(true)
    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} upload-field d-flex align-items-center justify-content-center`}>
                    <div className={'d-flex flex-column align-items-center justify-content-center m-2'}>
                        {upload ? <MantisUploadIcon height={'100px'} fill={'white'} className={'m-1 p-1'}/> :
                            <MantisUploadImageSuccessIcon height={'100px'} fill={'white'} className={'m-1 p-1'}/>}
                        <span>{fileName}</span>
                        <input
                            {...field}
                            {...rest}
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
                required={required}
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
        placeholder,
        ...rest
    } = props
    const classes = useStyles();

    return (
        <>
            <Controller
                render={({field}) => <div
                    className={`p-1 px-2 m-1 col-${col} form-field d-flex align-items-center justify-content-center`}
                    style={{cursor: 'pointer'}}>
                    <TextField
                        {...field}
                        {...rest}
                        placeholder={placeholder}
                        required={required}
                        variant={'standard'}
                        InputProps={{disableUnderline: true}}
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    className: classes.dropdownStyle
                                }
                            }
                        }}
                        classes={{
                            root: classes.root,
                            iconStandard: classes.icon,
                            listStandar: classes.root,
                            paper: classes.selectOptions
                        }}
                        className={'col-12 text-field m-0 p-0'}
                        style={{fontSize: '16px', cursor: 'pointer'}}
                        select
                    >
                        {children}
                    </TextField>
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
export const MantisMenuItem = (props) => {
    const {value, key, children, ...rest} = props
    const classes = useStyles();
    return (
        <MenuItem
            {...rest}
            value={value}
            key={key}
            classes={{
                root: classes.list
            }}>
            {children}
        </MenuItem>
    )
}