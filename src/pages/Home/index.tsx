import { useNavigate } from 'react-router-dom';
import Clock from '../../components/Clock';
import Countdown from '../../components/Countdown';
import { WiDayCloudyGusts } from "react-icons/wi";
import {
    ButtonContainer, City, FooterButtonContinue, FooterButtonLogout, FooterText, HomeFooter, HomeHeader, HomeSection, LeftContainerFooter, LogoContainer,
    MissionDescription, MissionSubText, MissionText, MissionTextSm, Seconds, Temperature, TimerContainer,
    TimerText, SeparationBar, WeatherDisplay, WeatherDiv, TimerAlign
} from './styles';
import logoHome from "../../assets/LogoCompasso-Home.png";
import { useEffect, useState } from 'react';
import { CurrentWeather } from '../../components/Weather';
export default function HomePage() {

    const navigate = useNavigate();
    const [weather, setWeather] = useState({ city: '', country: '', temperature: 0 })
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function () {
            CurrentWeather().then((res) => {
                setWeather({ city: res.name, country: res.sys.country, temperature: res.main.temp })
            })
        })
    }, [])

    return (
        <HomeSection>
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
            <MissionDescription>
                <MissionTextSm>Our mission is</MissionTextSm>
                <MissionSubText>Nossa missão é</MissionSubText>
                <MissionText>to transform the world</MissionText>
                <MissionSubText>transformar o mundo</MissionSubText>
                <MissionText>building digital experiences</MissionText>
                <MissionSubText>construindo experiências digitais</MissionSubText>
                <MissionText>that enable our client’s growth</MissionText>
                <MissionSubText>que permitam o crescimento dos nossos clientes</MissionSubText>
            </MissionDescription>
            <HomeFooter>
                    <FooterText>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
                        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</FooterText>
                    <SeparationBar></SeparationBar>
                <TimerContainer>
                    <TimerText>Application refresh in</TimerText>
                    <TimerAlign>
                        <Countdown max={600} />
                        <Seconds>seconds</Seconds>
                    </TimerAlign>
                </TimerContainer>
                <ButtonContainer>
                    <FooterButtonContinue type="button" onClick={() => window.open("//www.google.com", '_blank')}>Continuar Navegando</FooterButtonContinue>
                    <FooterButtonLogout type="button" onClick={() => navigate("/")}>Logout</FooterButtonLogout>
                </ButtonContainer>
            </HomeFooter>
        </HomeSection>
    )
}