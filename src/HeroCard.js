import React from "react";
import image from './images/backpack.jpg'

const HeroCard = (props) => {
    const {title} = props;
    return (
        <>
            <div className={'col-12 p-2 m-2'}>
                <h2>{title}</h2>
                <hr/>
                <div className={'col-8'}>
                    <img className={'rounded'} src={image} alt={'kit pack'}/>
                </div>
            </div>
        </>
    )
}

export default HeroCard