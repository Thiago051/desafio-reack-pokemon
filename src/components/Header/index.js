import logo from "../../images/logo.svg"
import { ThemeToggler } from "../ThemeToggler"
import * as styled from "./style"

export const Header = () => {
    return (
        <styled.Header>
            <styled.Info>
                <styled.Logo src={logo} alt="PokeDex" />
                <styled.Title>PokeDex</styled.Title>
            </styled.Info>
            <ThemeToggler />
        </styled.Header>
    )
}