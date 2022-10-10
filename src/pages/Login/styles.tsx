import styled from "styled-components";
import notebookImg from "../../assets/Notebook.png";


export const LoginSection = styled.section`
    background-color: #222222;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;

    @media screen and (max-width: 768px) , (max-height: 426px){
        min-height: 800px;
    }

`;

export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px), (max-height: 426px)  {
        width: 100%;
        
    }
`;

export const LoginContent = styled.div`
    
`;

export const ImgContainer = styled.div`
    background-image: url(${notebookImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    text-align: center;
    
    @media screen and (max-width: 1024px) {
        background-position: center;
    }
    
    @media screen and (max-width: 768px), (max-height: 426px) {
      display : none;
    }

`;

