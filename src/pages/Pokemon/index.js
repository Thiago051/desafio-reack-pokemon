import { pokemonAPI } from "../../services/api"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { GoBackLink } from "../../components/GoBackLink"
import { Moves } from "../../components/Moves"
import { Abilities } from "../../components/Abilities"
import { Type } from "../../components/Type"
import { ThemeContext } from "../../contexts/ThemeContext"
import { selectImage } from "../../utils/selectImage"
import { Container, Main, PokemonInfo } from "./style"


export const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: '',
        moves: [],
        abilities: [],
        types: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemon(id)
                .catch(error => {
                    if (error.response.status === 404) {
                        navigate(`/pokemon/${id}/NotFound`)
                    }
                })

            const name = response.data.name
            const imageUrl = response.data.sprites.other['dream_world']['front_default'] ?? selectImage(response)
            const moves = response.data.moves
            const abilities = response.data.abilities
            const types = response.data.types

            setPokemon({
                imageUrl: imageUrl,
                name: name,
                moves: moves,
                abilities: abilities,
                types: types
            })
        }
        fetchData()
    }, [id, navigate])

    const { theme } = useContext(ThemeContext)

    return (
        <Container onLoad={window.scroll({ top: 0 })}>
            <GoBackLink />
            <Main theme={theme}>
                <PokemonInfo theme={theme}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                </PokemonInfo>
                <Moves movesList={pokemon.moves} />
                <Abilities abilitiesList={pokemon.abilities} />
                <Type typesList={pokemon.types} />
            </Main>
        </Container>
    )
}