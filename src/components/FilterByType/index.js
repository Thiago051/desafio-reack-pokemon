import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card"
import * as styled from "./style"

export const FilterByType = ({ type }) => {

    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemonsByType(type)
            setPokemonsList(response.data.pokemon)
        }
        fetchData()
    }, [type])

    const pokemons = pokemonsList.map(pokemons => pokemons.pokemon.name)
    const { theme } = useContext(ThemeContext)

    return (
        <styled.Main style={{ backgroundColor: theme.background }}>
            <styled.List>
                {
                    pokemons.map((pokemon, index) =>
                        <styled.Item key={index}>
                            <Link to={`pokemon/${pokemon}`}>
                                <Card id={pokemon} />
                            </Link>
                        </styled.Item>
                    )
                }
            </styled.List>
        </styled.Main>
    )
}