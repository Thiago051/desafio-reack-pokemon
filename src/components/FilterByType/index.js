import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card"
import * as styled from "./style"

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

    const { theme } = useContext(ThemeContext)

    return (
        <styled.Main style={{ backgroundColor: theme.background }}>
            <styled.List>
                {
                    pokemons.map((pokemon, index) =>
                        <styled.Item key={index}>
                            <PokemonInfo name={pokemon} />
                        </styled.Item>
                    )
                }
            </styled.List>
        </styled.Main>
    )
}