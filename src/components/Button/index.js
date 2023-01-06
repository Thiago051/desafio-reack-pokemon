import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AppButton } from "./style"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <AppButton theme={theme}>
            <button {...props} />
        </AppButton>
    )
}