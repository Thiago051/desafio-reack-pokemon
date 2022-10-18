import { AddMorePokemons, AddButton } from "./style"

const Button = (props) => {
    return (
        <AddMorePokemons>
            <AddButton {...props} />
        </AddMorePokemons>
    )
}

export default Button