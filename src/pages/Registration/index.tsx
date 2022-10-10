import { WhiteLogo } from "../../components/WhiteLogo";
import WhiteLogoMedia from "../../components/WhiteLogoMedia";
import Header from "./Header";
import Main from "./Main";
import { RegistrationSection, RegistrationContainer, RegistrationContent, ImgContainer } from "./styles";


export default function Registration() {

    return (

        <RegistrationSection>
            <RegistrationContainer>
                <RegistrationContent>
                    <WhiteLogoMedia />
                    <Header />
                    <Main/>
                </RegistrationContent>
            </RegistrationContainer>
            <ImgContainer>
                <WhiteLogo />
            </ImgContainer>
        </RegistrationSection>

    )
}