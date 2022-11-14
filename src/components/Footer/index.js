import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import * as styled from "./style"

export const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <styled.Footer style={{ backgroundColor: theme.background }}>
            <styled.Text style={{ color: theme.color }}>
                Developed by
                <styled.Link href="https://github.com/Thiago051/desafio-react-pokemon"
                    target={"_blank"}
                    rel="noreferrer">
                    Thiago Oliveira
                </styled.Link>
            </styled.Text>
        </styled.Footer>
    )
}