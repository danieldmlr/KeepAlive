import { ErrorContainer, StyledErrorMessage } from "./styles";

export default function PasswordErrorMessage() {

    return(
        <ErrorContainer>
            <StyledErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</StyledErrorMessage>
        </ErrorContainer>
    )
}