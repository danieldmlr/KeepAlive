import styled from "styled-components";
import { missionSubTextColor } from "../../../components/UI/variables";

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

