import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeToggler"
import { AddMorePokemons, AddButton } from "./style"

const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <AddMorePokemons>
            <AddButton style={{ borderColor: theme.border }} {...props} />
        </AddMorePokemons>
    )
}

export default Button