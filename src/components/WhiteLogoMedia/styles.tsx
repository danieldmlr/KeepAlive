import styled from "styled-components";

export const LogoMedia = styled.img`
    display: none;
    position: top center;

    @media screen and (max-width: 768px){
        display: block;
        margin-bottom: 10%;
    }

    @media screen and (max-width: 426px){
        margin-bottom: 30%;
    }
    
    @media screen and (max-width: 376px){
        width: 80%;
    }

    @media screen and (max-width: 321px){
        width: 75%;
    }
`;