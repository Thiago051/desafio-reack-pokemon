import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import {Button} from "../../components/Button"
import { NotFound } from "./style"

export const Error = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <NotFound theme={theme}>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link to={'/'}>
                <Button>Go to Home Page</Button>
            </Link>
        </NotFound>
    )
}