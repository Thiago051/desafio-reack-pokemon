import { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { ThemeContext } from "../../contexts/ThemeContext"
import { Button } from "../Button"
import { Card } from "../Card"
import { Container, Pokemons } from "./style"
import { QUANTITY_TO_LOAD } from "../../variables/variables"
import { toast } from "react-toastify"
import { pokemonAPI } from "../../services/api"

export const AllPokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(QUANTITY_TO_LOAD)
    const [totalOfPokemons, setTotalOfPokemons] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemons(limit)
            setPokemons(response.data.results.map(pokemon => pokemon.name))
            setTotalOfPokemons(response.data.count)
        }
        fetchData()
    }, [limit, pokemons])

    const handleClick = () => {
        if (pokemons.length <= totalOfPokemons - QUANTITY_TO_LOAD) {
            setLimit(limit + QUANTITY_TO_LOAD)
        }
        else {
            setLimit(totalOfPokemons)
        }

        if (pokemons.length === totalOfPokemons) {
            toast.error('All pokemons of this category have already been loaded!!')
        }

    }

    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Pokemons>
                <ul>
                    {
                        pokemons.map((pokemon, index) =>
                            <li key={index}>
                                <Link to={`pokemon/${pokemon}`}>
                                    <Card id={pokemon} />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </Pokemons>
            <Button onClick={handleClick}>Load More</Button>
        </Container>
    )
}