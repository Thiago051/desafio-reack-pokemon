import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card"
import { Button } from "../Button"
import { Container } from "./style"
import { QUANTITY_TO_LOAD } from "../../variables/variables"
import { toast } from "react-toastify"

export const FilterByType = ({ type }) => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState()

    useEffect(() => {
        const fetchData = async () => {
            setPokemons([])
            const response = await pokemonAPI.getPokemonsByType(type)
            setPokemons(response.data.pokemon.map(pokemons => pokemons.pokemon.name))
        }
        fetchData()
        setLimit(QUANTITY_TO_LOAD)
    }, [type])

    const handleClick = () => {
        if (limit <= pokemons.length - QUANTITY_TO_LOAD) {
            setLimit((prevLimit) => prevLimit + QUANTITY_TO_LOAD)
        } else {
            setLimit(pokemons.length)
        }

        if (limit === pokemons.length) {
            toast.error('All pokemons of this category have already been loaded!!')
        }
    }

    const pokemonsToLoad = pokemons.slice(0, limit)

    return (
        <>
            <Container>
                <ul>
                    {
                        pokemonsToLoad.map((pokemon, index) =>
                            <li key={index}>
                                <Link to={`pokemon/${pokemon}`}>
                                    <Card id={pokemon} />
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </Container>
            <Button onClick={handleClick}>Load More</Button>
        </>
    )
}