import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { errorColor } from "../../../components/UI/variables"
import ErrorMessage from "../../../components/ValidationError"
import { InputsContainer, Label, Input, IconContainer, RegisterButton, InputContainer, InputContainerPassword, LoginGuide, LoginRedirectButton } from "./styles"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../services/firebaseConfig';


export default function Main() {

    const auth = getAuth(app);
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorName, setErrorName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(false)


    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                handleSubmit()
                // alert(errorCode)
            });
    }

    const handleSubmit = () => {
        
        validateEmail(email) ? setErrorEmail(false) : setErrorEmail(true);
        validateName(name) ? setErrorName(false) : setErrorName(true);
        validateLastName(lastName) ? setErrorLastName(false) : setErrorLastName(true);
        validatePassword(password) ? setErrorPassword(false) : setErrorPassword(true);
        MatchPasswords(password, repeatPassword) ? setErrorRepeatPassword(false) : setErrorRepeatPassword(true)
    }
    const validateEmail = (email: string) => {
        const regex = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
        return regex.test(email.toLowerCase());
    }

    const validateName = (name: string) => {
        const regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
        return regex.test(name);
    }

    const validateLastName = (lastName: string) => {
        const regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
        return regex.test(lastName);
    }

    const validatePassword = (password: string) => {
        const regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z~!@#$%^&()-_+={}[]|\/:;"'<>,.?]{6,}$/;
        return regex.test(password);
    }

    const MatchPasswords = (password: string, repeatPassword: string) => {
        (repeatPassword === password) && (password !== "" && repeatPassword !== "")
        return repeatPassword
    }


    return (

        <>
            <InputsContainer>
                <Label>Cadastro</Label>
                <InputContainer>
                    <Input
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                        value={email}
                        style={{ borderColor: `${errorEmail ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setEmail(target.value)
                            setErrorEmail(false)
                        }}
                    // onFocus={() => setFocusedEmail(true)}
                    // onBlur={(event) =>
                    //     event.target.value.length > 0 ? setFocusedEmail(true) : setFocusedEmail(false)
                    // }
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color={"#00D100"} display="none" />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Nome"
                        value={name}
                        style={{ borderColor: `${errorName ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setName(target.value)
                            setErrorName(false)
                        }}
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color={"#00D100"} display="none" />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        name="lastName"
                        autoComplete="off"
                        placeholder="Sobrenome"
                        value={lastName}
                        style={{ borderColor: `${errorLastName ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setLastName(target.value)
                            setErrorLastName(false)
                        }}

                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color={"#00D100"} display="none" />
                    </IconContainer>
                </InputContainer>

                <InputContainer>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="off"
                        value={password}
                        style={{ borderColor: `${errorPassword ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setPassword(target.value)
                            setErrorPassword(false)
                        }}
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color={"#00D100"} />
                    </IconContainer>
                </InputContainer>
                <InputContainerPassword>
                    <Input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir Senha"
                        autoComplete="off"
                        value={repeatPassword}
                        style={{ borderColor: `${errorRepeatPassword ? errorColor : "white"}` }}
                        onChange={({ target }) => {
                            setRepeatPassword(target.value)
                            setErrorRepeatPassword(false)
                        }}
                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck size={24} color={"#00D100"} />
                    </IconContainer>
                </InputContainerPassword>
            </InputsContainer>
            <RegisterButton onClick={signUp}>Registrar</RegisterButton>
            <LoginGuide>Se você já possui um cadastro, clique <LoginRedirectButton onClick={() => navigate("/")}>aqui</LoginRedirectButton></LoginGuide>
        </>
    )
}