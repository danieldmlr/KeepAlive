import styled from "styled-components";
import { errorColor } from "../UI/variables";

export const ErrorContainer = styled.div`
    
`;

export const StyledErrorMessage = styled.p`
    width: 37.85%;
    margin-left: 6.7%;
    margin-top: 4.02%;
    margin-bottom: -9%;
    font-family: 'Mark Pro';
    font-size: 1rem;
    font-weight: 700;
    color: ${errorColor};
    text-align: center;
    @media screen and (max-width: 1440px){
        width: 49%;
        margin-left: 4%;
        margin-bottom: -11%;
    }

    @media screen and (max-width: 1024px){
        width: 67%;
        margin-left: 2%;
        margin-bottom: -13%;
    }

    @media screen and (max-width: 768px){
        width: 52%;
        margin-left: 2%;
        margin-bottom: -13%;
    }

    @media screen and (max-width: 426px){
        width: 68%;
        margin-left: 4%;
        margin-bottom: -14%;
    }

    @media screen and (max-width: 376px){
        width: 78%;
        margin-left: 0;
        margin-bottom: -15%;
    }

    @media screen and (max-width: 321px){
        width: 86%;
        margin-left: 0;
        margin-bottom: -15%;
    }

    @media screen and (max-width: 281px){
        margin-bottom: -18%;
        font-size: 0.75rem;
    }
   
`;