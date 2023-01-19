import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import { ThemeToggler } from "../ThemeToggler"
import { Head } from "./style"

export const Header = () => {
    return (
        <Head>
            <Link to={'/'}>
                <img src={logo} alt="PokeDex" />
                <h1>PokeDex</h1>
            </Link>
            <ThemeToggler />
        </Head>
    )
}