import Clock from "../../../components/Clock";
import { HomeHeader, LogoContainer } from "./styles";
import logoHome from "../../../assets/LogoCompasso-Home.png"
import { Weather } from "../../../components/Weather";

export default function HeaderHome() {

    return (
        <HomeHeader>
            <LogoContainer>
                <img src={logoHome} alt="Logo Home" />
            </LogoContainer>
            <Clock />
            <Weather />
        </HomeHeader>
    )
}