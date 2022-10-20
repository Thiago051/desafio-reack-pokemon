import { AppHeader, AppInfo, AppTitle, AppLogo } from "./style"

import logo from "../../images/logo.svg"
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton"

const Header = () => {
    return (
        <>
            <AppHeader>
                <AppInfo>
                    <AppLogo src={logo} alt="PokeDex" />
                    <AppTitle>PokeDex</AppTitle>
                </AppInfo>
                <ThemeTogglerButton /> 
            </AppHeader>
        </>
    )
}

export default Header