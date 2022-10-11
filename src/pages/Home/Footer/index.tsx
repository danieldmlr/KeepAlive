import { useNavigate } from "react-router-dom";
import Countdown from "../../../components/Countdown"
import { HomeFooter, FooterText, SeparationBar, TimerContainer, TimerText, TimerAlign, Seconds, ButtonContainer, FooterButtonContinue, FooterButtonLogout } from "./styles"


export default function FooterHome() {

    const navigate = useNavigate();

    return (
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
    )
} 