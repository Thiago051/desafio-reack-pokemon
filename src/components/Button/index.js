import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AddMorePokemons, AddButton } from "./style"

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <AddMorePokemons>
            <AddButton style={{ borderColor: theme.border }} {...props} />
        </AddMorePokemons>
    )
}