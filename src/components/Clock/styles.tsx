import styled from "styled-components";
import { missionSubTextColor } from "../UI/variables";

export const ClockContainer = styled.div`
    display: flex;
    width: 22%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 426px), (max-height: 426px) {
        display: none;
    }
`;

export const Time = styled.p`
    font-size: 9rem;
    font-weight: 700;
    color: ${missionSubTextColor};
    
    @media screen and (max-width: 1025px){
        font-size: 7rem;
    }
`;

export const Day = styled.p`
    font-size: 0.875rem;
    color: ${missionSubTextColor};
    margin-top: -5.1%;
    @media screen and (max-width: 1025px){
        width: 92%;
    }
`;