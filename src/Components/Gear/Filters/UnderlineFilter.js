import React from "react";

const UnderlineFilter = ({setUnderlineFilter, underlineFilter, kits}) => {

    const filterSwitch = (text) => {
        setUnderlineFilter(text)
    }
    return (
        <>
            <div className={'underline-filter col-12'}>
                <div
                    className={`underline-filter-${underlineFilter === '' ? 'selected' : 'unselected'} col-4 py-2`}
                    onClick={() => filterSwitch('')}>
                    <div className={'text-align-left m-0'}>ALL KITS</div>
                    <div className={'rounded bg-glass col-2 d-flex align-items-center justify-content-center'}>
                        <div className={'p-0 m-0'}>{kits.length}</div>
                    </div>
                </div>
                <div
                    className={`underline-filter-${underlineFilter === 'Loaded Out' ? 'selected' : 'unselected'} col-4 py-2`}
                    onClick={() => filterSwitch('Loaded Out')}>
                    <div className={'text-align-left m-0'}>LOADED OUT</div>
                    <div className={'rounded bg-glass col-2 d-flex align-items-center justify-content-center'}>
                        <div className={'p-0 m-0'}>{kits.filter(kit => kit.kit_status === 'Loaded Out').length}</div>
                    </div>
                </div>
                <div
                    className={`underline-filter-${underlineFilter === 'In Shop' ? 'selected' : 'unselected'} col-4 py-2`}
                    onClick={() => filterSwitch('In Shop')}>
                    <div className={'text-align-left m-0'}>IN SHOP</div>
                    <div className={'rounded bg-glass col-2 d-flex align-items-center justify-content-center'}>
                        <div className={'p-0 m-0'}>{kits.filter(kit => kit.kit_status === 'In Shop').length}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderlineFilter