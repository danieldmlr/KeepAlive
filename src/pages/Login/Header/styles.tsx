import styled from "styled-components";


export const TitleContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    text-align: start;
`;

export const Title = styled.h3`
    font-size: 3.75rem;
    margin-bottom: 2.53%;

    @media screen and (max-width: 281px) {
        font-size: 2.75rem;
    }
`;

export const SubTitle = styled.p`

    margin-bottom: 20.07%;

    @media screen and (max-width: 1440px){
        width: 56%;
    }
    
    @media screen and (max-width: 1024px){
        width: 79.3%;
    }
    
    @media screen and (max-width: 901px) {
        width: 80%;
    }

    @media screen and (max-width: 901px), (max-height: 769px) {
        width: 86%;
    }
    
    @media screen and (max-width: 768px) and (orientation: portrait){
        width: 53%;
     
    }

    @media screen and (max-width: 426px){
        width: 79%;
    }

    @media screen and (max-width: 376px) {
        width: 67%;
       
    }

    @media screen and (max-width: 321px) {
        width: 75%;
      
    }

    @media screen and (max-width: 281px) {
        width: 89%;
        
    }
    
`;