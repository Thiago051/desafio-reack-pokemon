import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { DevInfo } from "./style"

export const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <DevInfo theme={theme}>
            <p>
                Developed by
                <a href="https://github.com/Thiago051/desafio-react-pokemon"
                    target={"_blank"}
                    rel="noreferrer">
                    Thiago Oliveira
                </a>
            </p>
        </DevInfo>
    )
}