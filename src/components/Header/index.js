import logo from "../../images/logo.svg"
import { ThemeTogglerButton } from "../ThemeTogglerButton"
import * as styled from "./style"

export const Header = () => {
    return (
        <styled.Header>
            <styled.Info>
                <styled.Logo src={logo} alt="PokeDex" />
                <styled.Title>PokeDex</styled.Title>
            </styled.Info>
            <ThemeTogglerButton />
        </styled.Header>
    )
}