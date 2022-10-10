import styled from "styled-components";
import { borderColor, buttonColor, buttonTextColor, textColor } from "../../../components/UI/variables";

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 17.1%;

    @media screen and (max-width: 426px) {
        margin-bottom: 23.1%;
    }

    @media screen and (max-width: 321px) {
        margin-top: 6%;
    }
`;

export const Label = styled.label`
    font-size: 1.875rem;
    margin-bottom: 4.76%;
`;

// export const EmailContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 4.91%;

//     @media screen and (max-width: 321px) {
//         margin-bottom: 10%;
//     }
// `;

export const Input = styled.input`
    width: 69.53%;
    height: 56px;
    background-color: transparent;
    color:${textColor};
    font-size: 1.125rem;
    border: 1px solid ${borderColor};
    border-radius: 50px;
    padding-left: 2.98%;

    transition: 0.5s transform;
    
    &::placeholder { 
        color:${textColor}; 
        font-family: 'Mark Pro';
        font-size: 1.125rem;
    };
    
    @media screen and (max-width: 1024px){
        width: 70%;
        height: 46px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 52.745%;
        height: 56px;
    }

    @media screen and (max-width: 426px) {
        width: 70%;
        height: 52px;
    }

    @media screen and (max-width: 376px) {
        width: 70%;
        height: 52px;
    }

    @media screen and (max-width: 321px) {
        width: 70%;
        height: 56px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4.91%;
`;

export const InputContainerPassword = styled.div`
    display: flex;
    align-items: center;
    
`;

export const IconContainer = styled.div`
    margin-left: 2.5%;
`;

export const RegisterButton = styled.button`
    width: 73.28%;
    height: 67px;
    padding: 0;
    margin-bottom: 4.91%;
    cursor: pointer;
    background: ${buttonColor};
    color: ${borderColor};

    font-family: 'Mark Pro';
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    
    border: none;
    border-radius: 50px;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
    
    @media screen and (max-width: 1024px) {
        width: 74%;
        height: 57px;
    }

    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 56.32%;
        height: 67px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 426px)  {
        width: 74%;
        height: 57px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 376px)  {
        width: 74%;
        height: 57px;
        /* border: 1px solid red; */
    }

    @media screen and (max-width: 321px)  {
        width: 74%;
        height: 67px;
        /* border: 1px solid red; */
    }

`;

export const LoginGuide = styled.p`
    font-size: 1.25rem;
`;

export const LoginRedirectButton = styled.button`
    border: none;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    color: ${buttonTextColor};
    background: transparent;
    font-family: 'Mark Pro';
    font-size: 1.25rem;
`;