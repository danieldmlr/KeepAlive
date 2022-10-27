import styled from "styled-components";
import logoCompass from "../../assets/bola-LogoCompasso-Home.png";
import { homeBackgroundColor } from "../../components/UI/variables";

export const HomeSection = styled.section`
    background: ${homeBackgroundColor};
    background-image: url(${logoCompass});
    background-repeat: no-repeat;
    background-position: 0 90%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    @media screen and (max-width: 1440px) {
        background-size: 30%;
    }

    @media screen and (max-width: 769px), (max-height: 426px) {
        background-image: none;
    }
`;


