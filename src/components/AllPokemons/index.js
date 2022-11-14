import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"
import { initialPokemonsQuantity, totalOfPokemons } from "../../variables/variables"
import { Button } from "../Button"
import { Card } from "../Card"
import * as styled from "./style"

const getIdList = (limit) => {
    let ids = []
    for (let id = 1; id <= limit; id++) ids.push(id)
    return ids
}

const PokemonsList = ({ limit }) => {

    if (limit > totalOfPokemons) limit = totalOfPokemons

    const pokemonsId = getIdList(limit)

    return (
        <styled.List>
            {
                pokemonsId.map((id, index) =>
                    <styled.Item key={index}>
                        <Link to={`pokemon/${id}`}>
                            <Card id={id} />
                        </Link>
                    </styled.Item>
                )
            }
        </styled.List>
    )
}

export const AllPokemons = () => {

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    const handleClick = () => setLimit(initialPokemonsQuantity + limit)

    const { theme } = useContext(ThemeContext)

    return (
        <styled.Main style={{ backgroundColor: theme.background }}>
            <styled.Pokemons>
                <PokemonsList limit={limit} />
            </styled.Pokemons>
            <Button onClick={handleClick}>Load More</Button>
        </styled.Main>
    )
}