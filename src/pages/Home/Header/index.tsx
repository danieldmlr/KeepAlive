import { useState, useEffect } from "react";
import { WiDayCloudyGusts } from "react-icons/wi";
import Clock from "../../../components/Clock";
import { CurrentWeather } from "../../../components/Weather";
import { HomeHeader, LogoContainer, WeatherDiv, City, WeatherDisplay, Temperature } from "./styles";
import logoHome from "../../../assets/LogoCompasso-Home.png"

export default function HeaderHome() {

    const [weather, setWeather] = useState({ city: '', country: '', temperature: 0 })
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function () {
            CurrentWeather().then((res) => {
                setWeather({ city: res.name, country: res.sys.country, temperature: res.main.temp })
            })
        })
    }, [])

    return (
            <HomeHeader>
                <LogoContainer>
                    <img src={logoHome} alt="Logo Home" />
                </LogoContainer>
                <Clock />
                <WeatherDiv>
                    <City>{weather.city} - {weather.country}</City>
                    <WeatherDisplay>
                        <WiDayCloudyGusts size={34} style={{ color: "#454545" }} />
                        <Temperature>{weather.temperature.toFixed(0)}°</Temperature>
                    </WeatherDisplay>
                </WeatherDiv>
            </HomeHeader>
    )
}