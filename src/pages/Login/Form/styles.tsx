import styled from "styled-components";
import { borderColor, buttonColor, buttonTextColor, textColor } from "../../../components/UI/variables";


interface ButtonProps {
    focused: boolean
}

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
   
`;

export const Label = styled.label`
    font-size: 1.875rem;
    margin-bottom: 6.2%;
`;

export const EmailContainer = styled.div`
    display: flex;
    align-items: center;
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

export const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 21.1%;
`;

export const IconContainer = styled.div<ButtonProps>`
    margin-left: 2.5%;

    transition: 0.3s transform;
    ${(props) =>
        props.focused ? "transform: translate(-250%)" : "transform: translate(0)"}
`;

export const ContinueButton = styled.button`
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

export const RegistrationGuide = styled.p`
    font-size: 1.125rem;
    padding-left: 2.98%;
`;

export const RegistrationRedirectButton = styled.button`
    border: none;
    text-decoration: none;
    padding: 0;
    padding-left: 1%;
    cursor: pointer;
    color: ${buttonTextColor};
    background: transparent;
    font-family: 'Mark Pro';
    font-size: 1.125rem;
`;