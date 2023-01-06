import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"
import { initialPokemonsQuantity, totalOfPokemons } from "../../variables/variables"
import { Button } from "../Button"
import { Card } from "../Card"
import { Container, Pokemons } from "./style"

const getIdList = (limit) => {
    let ids = []
    for (let id = 1; id <= limit; id++) ids.push(id)
    return ids
}

const PokemonsList = ({ limit }) => {

    const pokemonsId = getIdList(limit)

    return (
        <ul>
            {
                pokemonsId.map((id, index) =>
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

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    const handleClick = () => {
        if (limit <= totalOfPokemons - initialPokemonsQuantity){
            setLimit(initialPokemonsQuantity + limit)
        }
        else {
            setLimit(totalOfPokemons)
        }
        
        if(limit === totalOfPokemons)
            alert('All pokemons of this category have already been loaded!!')   
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