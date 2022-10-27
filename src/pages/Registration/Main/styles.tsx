import styled from "styled-components";
import { borderColor, buttonColor, buttonTextColor, textColor } from "../../../components/UI/variables";

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 21.1%;

`;

export const Label = styled.label`
    font-size: 1.875rem;
    margin-bottom: 6.2%;
`;

export const Input = styled.input`
    width: 69.53%;
    height: 4.9vh;
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
    
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6.2%;
`;

export const InputContainerPassword = styled.div`
    display: flex;
    align-items: center;
    
`;

export const IconContainer = styled.div`
    margin-left: 2.5%;
`;

export const PasswordRequirements = styled.div`
  margin-bottom: 6.2%;
    padding-left: 2.98%;
`;

export const Required = styled.p`
    font-size: 1rem;
`;

export const RegisterButton = styled.button`
    width: 73.3%;
    height: 6.2vh;
    padding: 0;
    padding-left: 2.98%;
    margin-bottom: 6.2%;
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

`;

export const LoginGuide = styled.p`
     font-size: 1.125rem;
    padding-left: 2.98%
     
`;

export const LoginRedirectButton = styled.button`
    border: none;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    color: ${buttonTextColor};
    background: transparent;
    font-family: 'Mark Pro';
    font-size: 1.125rem;
`;