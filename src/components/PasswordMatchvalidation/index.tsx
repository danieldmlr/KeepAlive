import { ErrorContainer, StyledErrorMessage } from "./styles";

export default function PasswordErrorMessage() {

    return(
        <ErrorContainer>
            <StyledErrorMessage>As senhas não coincidem</StyledErrorMessage>
        </ErrorContainer>
    )
}