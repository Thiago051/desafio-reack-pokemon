import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card"
import { Container } from "./style"

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

    const [pokemons, setPokemonsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemonsByType(type)
            setPokemonsList(
                response.data.pokemon.map(pokemons => pokemons.pokemon.name)
            )
        }
        fetchData()
    }, [type])

    return (
        <Container>
            <ul>
                {
                    pokemons.map((pokemon, index) =>
                        <li key={index}>
                            <PokemonInfo name={pokemon} />
                        </li>
                    )
                }
            </ul>
        </Container>
    )
}