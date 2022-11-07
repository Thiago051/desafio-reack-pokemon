import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"
import { initialPokemonsQuantity, totalOfPokemons } from "../../variables/variables"
import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { Main, Deck, List, Item } from "./style"

const getIdList = (limit) => {
    let ids = []
    for (let id = 1; id <= limit; id++) ids.push(id)
    return ids
}

const PokemonsList = ({ limit }) => {

    if (limit > totalOfPokemons) limit = totalOfPokemons

    const pokemonsId = getIdList(limit)

    return (
        <List>
            {
                pokemonsId.map((id, index) =>
                    <Item key={index}>
                        <Link to={`pokemon/${id}`}>
                            <Card id={id} />
                        </Link>
                    </Item>
                )
            }
        </List>
    )
}

export const AllPokemons = () => {

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    const handleClick = () => setLimit(initialPokemonsQuantity + limit)

    const { theme } = useContext(ThemeContext)

    return (
        <Main style={{ backgroundColor: theme.background }}>
            <Deck>
                <PokemonsList limit={limit} />
            </Deck>
            <Button onClick={handleClick}>Load More</Button>
        </Main>
    )
}