import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"
import { Button } from "../Button"
import { Card } from "../Card"
import { Container, Pokemons } from "./style"
import { getIDs } from "../../utils/getIDs"
import { QUANTITY_TO_LOAD } from "../../variables/variables"
import { toast } from "react-toastify"

const PokemonsList = ({ limit }) => {

    return (
        <ul>
            {
                limit.map((id, index) =>
                    <li key={index}>
                        <Link to={`pokemon/${id}`}>
                            <Card id={id} />
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export const AllPokemons = () => {

    const ids = getIDs()
    const [limit, setLimit] = useState(ids.slice(0, QUANTITY_TO_LOAD))

    const handleClick = () => {
        if (limit.length <= ids.length - QUANTITY_TO_LOAD) {
            setLimit(
                ids.slice(0, (limit.length + QUANTITY_TO_LOAD))
            )
        } else {
            setLimit(ids)
        }

        if (limit.length === ids.length) {
            toast.error('All pokemons of this category have already been loaded!!')
        }
    }

    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Pokemons>
                <PokemonsList limit={limit} />
            </Pokemons>
            <Button onClick={handleClick}>Load More</Button>
        </Container>
    )
}