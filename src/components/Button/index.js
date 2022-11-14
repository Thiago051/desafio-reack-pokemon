import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import * as styled from "./style"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <styled.LoadPokemons>
            <styled.Button style={{ borderColor: theme.border }} {...props} />
        </styled.LoadPokemons>
    )
}