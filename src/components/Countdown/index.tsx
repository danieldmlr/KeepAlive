import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Timer } from "./styles";

interface Props {
    max: number;
}

export default function Countdown({ max }: Props) {
    const [counter, setCounter] = useState(max);
    const navigate = useNavigate();

    useEffect(() => {
        counter >= 1 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate("/");
    }, [counter]);

    return (
        <Timer>
            {counter}
        </Timer>
    );
}