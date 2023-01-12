import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card"
import { Button } from "../Button"
import { Container } from "./style"
import { QUANTITY_TO_LOAD } from "../../variables/variables"

const PokemonInfo = ({ name }) => {

    const [id, setId] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemon(name)
            setId(response.data.id)
        }
        fetchData()
    }, [name])


    return (
        <Link to={`pokemon/${id}`}>
            <Card id={name} />
        </Link>
    )
}


export const FilterByType = ({ type }) => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemonsByType(type)
            setPokemons(response.data.pokemon.map(pokemons => pokemons.pokemon.name))
            if (limit.length === 0) setLimit(pokemons.slice(0, QUANTITY_TO_LOAD))
        }
        fetchData()
    }, [type, pokemons, limit.length])


    const handleClick = () => {
        if (limit.length <= pokemons.length - QUANTITY_TO_LOAD) {
            setLimit(
                pokemons.slice(0, (limit.length + QUANTITY_TO_LOAD))
            )
        } else {
            setLimit(pokemons)
        }

        if (limit.length === pokemons.length) {
            alert('All pokemons of this category have already been loaded!!')
        }
    }

    return (
        <>
            <Container>
                <ul>
                    {
                        limit.map((pokemon, index) =>
                            <li key={index}>
                                <PokemonInfo name={pokemon} />
                            </li>
                        )
                    }
                </ul>
            </Container>
            <Button onClick={handleClick}>Load More</Button>
        </>
    )
}