import styled from "styled-components";
import { missionTextColor, missionSubTextColor } from "../../../components/UI/variables";

export const MissionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 7.03%;

    @media screen and (max-width: 426px), (max-height: 426px) {
        padding-right: 0%;
        align-items: right;
    }

    @media screen and (max-width: 376px), (max-height: 376px) {
        margin-bottom: 1.5%;
    }

    /* @media screen and (max-width: 281px) {
        margin-bottom: 10%;
    } */
`;

export const MissionText = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    color: ${missionTextColor};
    margin-top: 1.25%;
    
    @media screen and (max-width: 1441px) {
        font-size: 3rem;
        
    }
    
     
    @media screen and (max-width: 1025px) {
        font-size: 2.75rem;
        
    }

    @media screen and (max-width: 1024px) {
        font-size: 2.25rem;
        margin-top: 1.75%;
    }

    @media screen and (max-width: 769px) {
        font-size: 2.25rem;
        margin-top: 1.75%;
        
    }

    @media screen and (max-width: 426px) , (max-height: 426px) {
        font-size: 1.75rem;
        text-align: center;
        margin-top: 0.75%;
    }

    @media screen and (max-width: 426px) {
        font-size: 1.75rem;
        text-align: center;
        margin-top: 13.75%;
    }

    @media screen and (max-width: 281px) {
        font-size: 1.15rem;
        margin-top: 8.75%;
    }
    
`;

export const MissionTextSm = styled.h2`
    font-size: 2.25rem;
    font-weight: 700;
    color: ${missionTextColor};

    @media screen and (max-width: 426px) , (max-height: 426px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 426px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 281px) {
        font-size: 1rem;
    }
    
`;

export const MissionSubText = styled.p`
    font-size: 1.5rem;
    color: ${missionSubTextColor};

    
    
    @media screen and (max-width: 426px) , (max-height: 426px) {
       text-align: center;
       font-size: 1.25rem;
    }

    @media screen and (max-width: 321px) {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 281px) {
        font-size: 1rem;
    }
`;

