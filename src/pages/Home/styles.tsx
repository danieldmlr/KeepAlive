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

    @media screen and (max-width: 1441px) {
        background-size: 27%;
        background-position: 0px 71%;
    }

    @media screen and (max-width: 1025px){
        background-position: 0 82%;
    }

    @media screen and (max-width: 769px), (max-height: 426px) {
        background-image: none;
    }

    @media screen and (max-width: 281px) , (max-height: 281px){
        min-height: 460px;
    }
`;


