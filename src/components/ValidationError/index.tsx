import { ErrorContainer, StyledErrorMessage } from "./styles";

export default function ErrorMessage() {

    return(
        <ErrorContainer>
            <StyledErrorMessage>Ops, usuário ou senha inválidos. Tente novamente!</StyledErrorMessage>
        </ErrorContainer>
    )
}