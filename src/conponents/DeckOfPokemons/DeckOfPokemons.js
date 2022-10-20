import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/themeToggler"
import { initialPokemonsQuantity } from "../../variables/variables"
import Button from "../Button/Button"
import Card from "../Card/Card"
import { Main, Deck, List, Item } from "./style"

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

export default DeckOfPokemons