import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { Card } from "../Card/Card"
import { Main, List, Item } from "./style"

export const FilterByType = ({ type }) => {

    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemonsByType(type)
            setPokemonsList(response.data.pokemon)
        }
        fetchData()
    }, [type])

    const { theme } = useContext(ThemeContext)

    return (
        <Main style={{ backgroundColor: theme.background }}>
            <List>
                {
                    pokemonsList.map((pokemons, index) =>
                        <Item key={index}>
                            <Link to={`pokemon/${pokemons.pokemon.name}`}>
                                <Card id={pokemons.pokemon.name} />
                            </Link>
                        </Item>
                    )
                }
            </List>
        </Main>
    )
}