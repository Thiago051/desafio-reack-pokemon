import { AppHeader, AppTitle, AppLogo } from "./style"

import logo from "../../images/logo.svg"

const Header = () => {
    return (
        <AppHeader>
            <AppLogo src={logo} alt="PokeDex" />
            <AppTitle>PokeDex</AppTitle>
        </AppHeader>
    )
}

export default Header