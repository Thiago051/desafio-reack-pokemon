import { AppFooter, FooterText, FooterLink } from "./style"

const Footer = () => {
    return (
        <AppFooter>
            <FooterText>
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

export default Footer