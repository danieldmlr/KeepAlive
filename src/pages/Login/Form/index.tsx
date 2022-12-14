import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import ErrorMessage from '../../../components/ValidationError';
import { errorColor } from '../../../components/UI/variables';
import { FormContainer, Label, EmailContainer, Input, IconContainer, PasswordContainer, ContinueButton, RegistrationGuide, RegistrationRedirectButton } from './styles';
import { getAuth, signInWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import { app } from '../../../services/firebaseConfig';

export default function Form() {

    const auth = getAuth(app);

    const signIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    const [focusedEmail, setFocusedEmail] = useState(false)
    const [focusedPassword, setFocusedPassword] = useState(false)
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    return (
        <>
            <FormContainer>
                <Label>Login</Label>
                <EmailContainer>
                    <Input
                        type="text"
                        name="email"
                        autoComplete='off'
                        placeholder="Email"
                        value={email}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setEmail(target.value)
                            setError(false)
                        }}
                        onFocus={() => setFocusedEmail(true)}
                        onBlur={(event) =>
                            event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                        }
                    >
                    </Input>
                    <IconContainer focused={focusedEmail}>
                        <AiOutlineUser size={24} />
                    </IconContainer>
                </EmailContainer>
                <PasswordContainer>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={password}
                        style={{ borderColor: `${error ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setPassword(target.value)
                            setError(false)
                        }}
                        onFocus={() => setFocusedPassword(true)}
                        onBlur={(event) =>
                            event.target.value.length > 0 ? setFocusedPassword(true) : setFocusedPassword(false)
                        }
                    >
                    </Input>

                    <IconContainer focused={focusedPassword}>
                        <AiOutlineLock size={24} />
                    </IconContainer>
                </PasswordContainer>
                {error && <ErrorMessage />}

                <ContinueButton onClick={signIn}>Continuar</ContinueButton>
                <RegistrationGuide>Ainda n??o possui um cadastro?
                    Clique<RegistrationRedirectButton
                        onClick={() => navigate("/register")}>
                        aqui</RegistrationRedirectButton>
                </RegistrationGuide>
            </FormContainer>
        </>
    )

}