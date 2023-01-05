import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { NotFound } from "./style"

export const Error = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <NotFound style={{ backgroundColor: theme.background }}>
            <h2 style={{ color: theme.color }}>404</h2>
            <p style={{ color: theme.color }}>Page Not Found</p>
            <Link to={'/'}>
                <span style={{borderColor: theme.border}}>Go to Home Page</span>
            </Link>
        </NotFound>
    )
}