import { useState } from "react"
import { initialPokemonsQuantity } from "../variables/variables"
import Button from "./Button"
import Card from "./Card"


const PokemonsList = ({ limit }) => {

    const getIdList = () => {
        let ids = []
        for (let id = 1; id <= limit; id++) ids.push(id)
        return ids
    }

    const pokemonsId = getIdList()

    return (
        <>
            <ul>
                {
                    pokemonsId.map((id, index) =>
                        <li key={index}>
                            <Card id={id} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}

const DeckOfPokemons = () => {

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    const handleClick = () => {
        setLimit(initialPokemonsQuantity + limit)
    }

    return (
        <>
            <PokemonsList limit={limit} />
            <Button onClick={handleClick}>Carregar Mais</Button>
        </>
    )
}

export default DeckOfPokemons