import { useState } from "react"
import { Link } from 'react-router-dom'
import { initialPokemonsQuantity } from "../../variables/variables"
import Button from "../Button/Button"
import Card from "../Card/Card"
import { Main, List, Item } from "./style"

const getIdList = (limit) => {
    let ids = []
    for (let id = 1; id <= limit; id++) ids.push(id)
    return ids
}

const PokemonsList = ({ limit }) => {

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


const DeckOfPokemons = () => {

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    const handleClick = () => {
        setLimit(initialPokemonsQuantity + limit)
        // scroll()
    }

    return (
        <>
            <Main>
                <PokemonsList limit={limit} />
            </Main>
            <Button onClick={handleClick}>Load More</Button>
        </>
    )
}

export default DeckOfPokemons