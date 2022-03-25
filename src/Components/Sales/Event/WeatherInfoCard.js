import React, {useEffect, useState} from "react";
import Clear from '../../../Weather Icons/Clear.svg'
import Rain from '../../../Weather Icons/Rain.svg'
import Clouds from '../../../Weather Icons/Clouds.svg'
import Thunderstorm from '../../../Weather Icons/Thunderstorm.svg'
import Drizzle from '../../../Weather Icons/Drizzle.svg'
import Snow from '../../../Weather Icons/Snow.svg'
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


const WeatherInfoCard = (props) => {
    const {data, header} = props;
    const [conditions, setConditions] = useState()
    const [sunset, setSunset] = useState()
    const temp = (conditions?.main?.temp - 273.15) * (9 / 5) + 32
    const icon = {
        Clear: Clear,
        Rain: Rain,
        Clouds: Clouds,
        Thunderstorm: Thunderstorm,
        Drizzle: Drizzle,
        Snow: Snow
    }
    let utc = require('dayjs/plugin/utc')
    let timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
    dayjs.extend(utc)
    dayjs.extend(timezone)
    // sunset time https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2022-03-17
// kelvin to F conversion (Kelvin − 273.15) × 9/5 + 32
    useEffect(() => {
        Promise.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
                params: {
                    appid: '0b182c510c4ec6fe26184bdfdca2c894',
                    lat: data?.venue?.latitude,
                    lon: data?.venue?.longitude
                }
            }),
            axios.get(`https://api.sunrise-sunset.org/json?`, {
                params: {
                    lat: data?.venue?.latitude,
                    lng: data?.venue?.longitude,
                    formatted: 0,
                }
            }),
        ]).then(res => {
            setConditions({...res[0].data})
            setSunset({...res[1].data.results})
        })
    }, [data])
    const dateJS = [data?.date, sunset?.sunset].join(',')
    console.log("EVENT DATA:", data)
    console.log("CONDITIONS", conditions)
    console.log("SUNSET", sunset)
    console.log("SUNSET DAYJS", dayjs(dateJS))
    return (
        <>
            <div className={'col-12'} style={{minHeight: '400px'}}>
                {header}
                <div className={'col-12 d-flex flex-row justify-content-around'}>
                    <div
                        className={'col-4 rounded bg-transparent d-flex flex-row justify-content-center align-items-center p-2'}
                        style={{height: '90px', width: '90px'}}>
                        <img src={icon[`${conditions?.weather[0]?.main}`]}
                             alt={`Weather ${conditions?.weather[0]?.main}`}
                             className={'rounded'}
                             style={{maxWidth: '90px'}}/>
                    </div>
                    <div className={'col-8 m-2'}>
                        <div className={'col-11 m-2'}>
                            <div className={'row d-flex justify-content-between'}>
                                <div className={'col-6'}>
                                    <h4 className={'list-title'}>CONDITIONS</h4>
                                </div>
                                <div className={'col-6'}>
                                    <p className={'m-0'}>{conditions?.weather[0]?.main}</p>
                                </div>
                            </div>
                            <div className={'row d-flex justify-content-between'}>
                                <div className={'col-6'}>
                                    <h4 className={'list-title'}>TEMPERATURE</h4>
                                </div>
                                <div className={'col-6'}>
                                    <p className={'m-0'}>{`${Math.round(temp)} \xB0 F`}</p>
                                </div>
                            </div>
                            <div className={'row d-flex justify-content-between'}>
                                <div className={'col-6'}>
                                    <h4 className={'list-title'}>SUNSET TIME</h4>
                                </div>
                                <div className={'col-6'}>
                                    <p className={'m-0'}>{dayjs(sunset?.sunset).tz("America/Chicago").format("h:mm A")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherInfoCard