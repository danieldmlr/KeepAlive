import { HomeSection } from './styles';
import HeaderHome from './Header';
import MainHome from './Main';
import FooterHome from './Footer';



export default function HomePage() {

    return (
        <>
            <HomeSection>
                <HeaderHome />
                <MainHome /> 
                <FooterHome />
            </HomeSection>
        </>
    )
}