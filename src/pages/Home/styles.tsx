import styled from "styled-components";
import logoCompass from "../../assets/bola-LogoCompasso-Home.png";
import { borderColor, buttonTextColor, homeBackgroundColor, homeFooterColor, missionSubTextColor, missionTextColor, textColor } from "../../components/UI/variables";

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

export const MissionDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 7.03%;

    @media screen and (max-width: 426px), (max-height: 426px) {
        padding-right: 0%;
        align-items: center;
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

export const HomeFooter = styled.footer`
    background: ${homeFooterColor};
    display: flex;
    justify-content: end;
    align-items: center;
    height: 9.275%;

    @media screen and (max-width: 769px){
        flex-direction: column-reverse;
        height: 200px;
    }

    @media screen and (max-width: 321px){
        height: 210px;   
    }

    @media screen and (max-width: 281px){
        height: 185px;  
    }
`;

export const LeftContainerFooter = styled.div`
    display: flex;
    margin-right: 6.5%;
`;

export const FooterText = styled.p`
    width: 31%;
    font-size: 0.75rem;
    padding: 0 1.83% 0 18.44%;
    text-align: end;

    @media screen and (max-width: 1441px) {
        width: 40%;
        text-align: right;
        padding: 0 1.83% 0 7.44%;
    }

    @media screen and (max-width: 1025px){
        padding-left: 9%;
    }

    @media screen and (max-width: 1024px){
        width: 24%;
        font-size: 0.875rem;
        padding-left: 0;
    }

    @media screen and (max-width: 769px){
        /* width: 66%; */
        width: 75%;
        font-size: 0.875rem;
        margin-bottom: 2%;
        padding-left: 0;
    }

    @media screen and (max-width: 426px) , (max-height: 426px){
        width: 28%;
        text-align: center;
    }

    @media screen and (max-width: 426px) {
        /* width: 66%; */
        width: 93%;
        text-align: center;
    }

    @media screen and (max-width: 376px){
        /* width: 66%; */
        width: 86%;
    
    }

    @media screen and (max-width: 321px){
        /* width: 66%; */
        width: 76%;
    
    }

    @media screen and (max-width: 281px), (max-height: 281px) {
        width: 88%;
    }
`;

export const SeparationBar = styled.p`
    border: 1px solid #FFFFFF;
    width: 0;
    height: 59px;
    margin-right: 6.5%;

    @media screen and (max-width: 769px){
        display: none;
    }
`

export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 19.4%;
    width: 12.5%;

    @media screen and (max-width: 1441px){
        padding-right: 16.4%;   
    }

    @media screen and (max-width: 1441px){
        padding-right: 19.4%;   
    }

    @media screen and (max-width: 769px) {
        padding-right: 7%;
        margin-bottom: 1.5%;
    }

    @media screen and (max-width: 426px){
        padding-right: 10%;   
    }

    @media screen and (max-width: 376px){
        margin-bottom: 2.5%;
    }

    @media screen and (max-width: 321px){
        padding-right: 45%;
    }
    
    @media screen and (max-width: 281px) , (max-height: 281px){
        padding-right: 19%;
    }

    @media screen and (max-width: 281px){
        padding-right: 50%;
    }
  
`;

export const TimerText = styled.p`
    display: flex;
    width: 45%;
    font-size: 0.875rem;
    text-align: end;
    padding-right: 11.8%;
    margin-left: 44%;

    @media screen and (max-width: 1025px) {
        width: 61%;
        padding-right: 38.8%;
   
    }

    @media screen and (max-width: 769px){
        width: 76%;
        font-size: 1rem;
        padding-right: 35%;
        margin-left: 0
    }

    @media screen and (max-width: 426px){
        width: 137%;
        font-size: 1rem;
        padding-right: 75%;
    }

    @media screen and (max-width: 376px), (max-height: 376px){
        width: 77%;
    }

    @media screen and (max-width: 376px){
        width: 155%;
    }

    @media screen and (max-width: 321px){
        width: 182%;
    }
    
    @media screen and (max-width: 281px), (max-height: 281px) {
        width: 108%;
    }

    @media screen and (max-width: 281px){
        width: 208%;
    }
  
`;

export const TimerAlign = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 97px;
`;

export const Seconds = styled.p`
    font-size: 0.875rem;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    height: 100%;

    @media screen and (max-width: 769px){
        width: 100%;
    }
`;

export const FooterButtonContinue = styled.button`
    
    width: 131px;
    height: 100%;
    background: ${borderColor};
    color: ${buttonTextColor}; 
    border: none;
    font-family: 'Mark Pro';
    font-size: 0.75rem;

    @media screen and (max-width: 769px){
        width: 50%;
        font-size: 1rem;
    }
`;

export const FooterButtonLogout = styled.button`
    width: 131px;
    height: 100%;
    background: transparent;
    color: ${borderColor};
    border: none;
    font-family: 'Mark Pro';
    font-size: 0.75rem;

    @media screen and (max-width: 769px){
        width: 50%;
        font-size: 1rem;
    }   
`;