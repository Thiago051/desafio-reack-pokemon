import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AppFooter, FooterText, FooterLink } from "./style"

export const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <AppFooter style={{ backgroundColor: theme.background }}>
            <FooterText style={{ color: theme.color }}>
                Developed by {" "}
                <FooterLink href="https://github.com/Thiago051/desafio-react-pokemon"
                    target={"_blank"}
                    rel="noreferrer">
                    Thiago Oliveira
                </FooterLink>
            </FooterText>
        </AppFooter>
    )
}