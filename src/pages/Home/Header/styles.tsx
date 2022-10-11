import styled from "styled-components";
import { missionSubTextColor } from "../../../components/UI/variables";

export const HomeHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 1.3%;

    @media screen and (max-width: 426px) {
        justify-content: space-evenly;
    }
    
`;


export const LogoContainer = styled.div`
    padding-left: 2.1%;
`;

export const WeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2.14%;
`;

export const City = styled.p`
    font-size: 0.875rem;
    color: ${missionSubTextColor};
    text-align: center;

    @media screen and (max-width: 281px){
        font-size: 0.75rem;
    }
`;

export const WeatherDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Temperature = styled.p`
    font-size: 3rem;
    font-weight: 700;
    color: ${missionSubTextColor};
    text-align: center;

    @media screen and (max-width: 281px) {
        font-size: 2rem;
    }
`;
