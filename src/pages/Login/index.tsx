import { LoginSection, LoginContainer, LoginContent, ImgContainer } from './styles';
import Inputs from './Inputs';
import Header from './Header';
import { WhiteLogo } from '../../components/WhiteLogo';
import WhiteLogoMedia from '../../components/WhiteLogoMedia';


export default function Login() {

    return (

        <LoginSection>

            <LoginContainer>

                <LoginContent>
                    <WhiteLogoMedia />
                    <Header />
                    <Inputs />
                </LoginContent>

            </LoginContainer>
            <ImgContainer>

                <WhiteLogo />

            </ImgContainer>

        </LoginSection>

    )
}

