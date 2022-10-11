import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import { borderColor, errorColor, isValidColor } from "../../../components/UI/variables"
import ErrorMessage from "../../../components/ValidationError"
import { InputsContainer, Label, Input, IconContainer, RegisterButton, InputContainer, InputContainerPassword, LoginGuide, LoginRedirectButton } from "./styles"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser, updateProfile } from "firebase/auth";
import { app } from '../../../services/firebaseConfig';


export default function Main() {

    const auth = getAuth(app);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);

    const [correctPassword, setCorrectPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    const [hasMinLength, sethasMinLength] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialCharacter, sethasSpecialCharacter] = useState(false);

    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(userCredential.user, {displayName: name})
                navigate("/")
                console.log(user.displayName)
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage)
                handleSubmit()
            });
    }

    const handleSubmit = () => {

        validateEmail(email) ? setErrorEmail(false) : setErrorEmail(true);
        validateName(name) ? setErrorName(false) : setErrorName(true);
        validatePassword(password) ? setErrorPassword(false) : setErrorPassword(true);
        matchPasswords(password, repeatPassword) ? setErrorRepeatPassword(false) : setErrorRepeatPassword(true)
    }

    const validateEmail = (email: string) => {
        const regex = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/);
        return regex.test(email.toLowerCase());
    }

    const validateName = (name: string) => {
        const regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
        return regex.test(name);
    }

    const validatePassword = (password: string) => {
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
        return regex.test(password);
    }

    useEffect(() => {


        const regexMinLength = /(?=.{6})/;
        regexMinLength.test(password) ? sethasMinLength(true) : sethasMinLength(false)

        const regexUppercase = /(?=.*?[A-Z])/;
        regexUppercase.test(password) ? setHasUppercase(true) : setHasUppercase(false)

        const regexLowercase = /^(?=.*[a-z])/;
        regexLowercase.test(password) ? setHasLowercase(true) : setHasLowercase(false)

        const regexNumber = /(?=.*?[0-9])/;
        regexNumber.test(password) ? setHasNumber(true) : setHasNumber(false)

        const regexSpecialCharacter = /(?=.*[-+_!@#$%^&*Çç., ?])/;
        regexSpecialCharacter.test(password) ? sethasSpecialCharacter(true) : sethasSpecialCharacter(false)

    }, [hasUppercase, hasLowercase, password])

    const validPassword = () => {
        validatePassword(password) ? setCorrectPassword(true) : setCorrectPassword(false)
        return correctPassword
    }


    const matchPasswords = (password: string, repeatPassword: string) => {
        if (repeatPassword === password) {
            return repeatPassword
        } else {
            console.log("as senhas não coincidem")
        }
    }

    const equalPasswords = () => {
        matchPasswords(password, repeatPassword) ? setPasswordMatch(true) : setPasswordMatch(false)
        return passwordMatch
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

                        }}>
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck
                            size={24}
                            color={isValidColor}
                            display="none" />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Nome"
                        value={name}
                        style={{ borderColor: `${errorName ? errorColor : borderColor}` }}

                        onChange={({ target }) => {
                            setName(target.value)
                            setErrorName(false)
                        }}>
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck
                            size={24}
                            color={isValidColor}
                            display="none"
                        />
                    </IconContainer>
                </InputContainer>
                <InputContainer>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="off"
                        value={password}
                        style=
                        {!correctPassword ?
                            { borderColor: `${errorPassword ? errorColor : borderColor}` }
                            : { borderColor: `${isValidColor}` }}
                        onChange={({ target }) => {
                            setPassword(target.value)
                            setErrorPassword(false)


                        }}

                        onBlur={validPassword}

                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck
                            size={24}
                            color={"#00D100"}
                            style={{ display: `${!correctPassword ? "none" : "block"}` }}
                        />
                    </IconContainer>
                </InputContainer>
                <div>
                    <p style={{ color: `${hasMinLength ? isValidColor : "white"}` }}>Seis digitos <AiOutlineCheck /> </p>
                    <p style={{ color: `${hasNumber ? isValidColor : "white"}` }}>Um número <AiOutlineCheck /> </p>
                    <p style={{ color: `${hasUppercase ? isValidColor : "white"}` }}>Uma letra maiúscula <AiOutlineCheck /> </p>
                    <p style={{ color: `${hasLowercase ? isValidColor : "white"}` }}>Uma letra minúscula <AiOutlineCheck /> </p>
                    <p style={{ color: `${hasSpecialCharacter ? isValidColor : "white"}` }}>Um caractere especial <AiOutlineCheck /> </p>
                </div>
                <InputContainerPassword>
                    <Input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repetir Senha"
                        autoComplete="off"
                        value={repeatPassword}
                        style=
                        {!passwordMatch ?
                            { borderColor: `${errorRepeatPassword ? errorColor : borderColor}` }
                            : { borderColor: `${isValidColor}` }
                        }
                        onChange={({ target }) => {
                            setRepeatPassword(target.value)
                            setErrorRepeatPassword(false)
                            setPasswordMatch(false)
                        }}
                        onBlur={equalPasswords}

                    >
                    </Input>
                    <IconContainer>
                        <AiOutlineCheck
                            size={24}
                            color={isValidColor}
                            style={{ display: `${!passwordMatch ? "none" : "block"}` }}
                        />
                    </IconContainer>
                </InputContainerPassword>
            </InputsContainer>
            <RegisterButton onClick={signUp}>Registrar</RegisterButton>
            <LoginGuide>Se você já possui um cadastro, clique <LoginRedirectButton onClick={() => navigate("/")}>aqui</LoginRedirectButton></LoginGuide>
        </>
    )
}